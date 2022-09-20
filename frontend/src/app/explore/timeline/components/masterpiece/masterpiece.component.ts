import { NgtVector3 } from '@angular-three/core';
import { NgtTextureLoader } from '@angular-three/soba/loaders';
import {
  Component,
  Input,
  Output,
  OnInit,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import Artwork from 'src/app/explore/models/artwork.model';
import { Texture, DoubleSide } from 'three';
import * as constants from '../../constants';
import { ArtworksService } from '../../services/artworks/artworks.service';

@Component({
  selector: 'app-masterpiece',
  templateUrl: './masterpiece.component.html',
  styleUrls: ['./masterpiece.component.scss'],
  providers: [NgtTextureLoader],
})
export class MasterpieceComponent implements OnInit, OnDestroy {
  @Input() posZ!: number;
  @Input() artwork!: Artwork;
  @Input() showYear = true;

  isHighlighted = false;

  artworkPicked = false;

  @Output() onArtworkPicked: EventEmitter<void> = new EventEmitter();

  artworkGrowFactor = 1;

  texture$!: Observable<Texture>;

  readonly side = DoubleSide;

  unsubscribe = new Subject<void>();

  constructor(
    private textureLoader: NgtTextureLoader,
    private artworksService: ArtworksService
  ) {}

  ngOnInit(): void {
    this.texture$ = this.textureLoader.load(
      this.artwork.preview.replace(
        'imageserver-2022',
        'data-proxy/image.php?subpath='
      )
    );

    this.artworksService.highlightedArtworks
      .pipe(takeUntil(this.unsubscribe))
      .subscribe({
        next: (highlightedArtworks) => {
          this.isHighlighted = highlightedArtworks.includes(
            this.artwork.inventoryNumber
          );
        },
      });

    this.artworksService.pickedArtwork
      .pipe(takeUntil(this.unsubscribe))
      .subscribe({
        next: (pickedArtwork) => {
          this.artworkPicked =
            pickedArtwork?.inventoryNumber === this.artwork.inventoryNumber;

          this.artworkPicked
            ? (this.artworkGrowFactor = 2)
            : (this.artworkGrowFactor = 1);
        },
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  pickArtwork() {
    this.artworksService.pickedArtwork.next(this.artwork);
  }

  onPointerEnter() {
    this.artworkGrowFactor = 2;
  }

  onPointerLeave() {
    if (!this.artworkPicked) {
      this.artworkGrowFactor = 1;
    }
  }

  get positionVector() {
    return [
      constants.xStart +
        (this.artwork.width / 100 / 2) * this.artworkGrowFactor +
        (this.isHighlighted ? constants.highlightDistance : 0),
      constants.yStart +
        (this.artwork.height / 100 / 2) * this.artworkGrowFactor,
      constants.zStart + this.posZ,
    ] as NgtVector3;
  }

  get positionYearVector() {
    return [
      constants.xStart -
        0.75 +
        (this.isHighlighted ? constants.highlightDistance : 0),
      constants.yStart + 0.1,
      this.posZ,
    ] as NgtVector3;
  }
}
