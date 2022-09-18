import { NgtVector3 } from '@angular-three/core';
import { NgtTextureLoader } from '@angular-three/soba/loaders';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import Artwork from 'src/app/explore/models/artwork.model';
import { Texture, DoubleSide } from 'three';
import * as constants from '../../constants';

@Component({
  selector: 'app-masterpiece',
  templateUrl: './masterpiece.component.html',
  styleUrls: ['./masterpiece.component.scss'],
  providers: [NgtTextureLoader],
})
export class MasterpieceComponent implements OnInit {
  consts = constants;

  @Input() posZ!: number;
  @Input() artwork!: Artwork;
  @Input() showYear = true;

  _artworkPicked = false;

  get artworkPicked(): boolean {
    return this._artworkPicked;
  }
  @Input() set artworkPicked(aP: boolean) {
    this._artworkPicked = aP;
    if (!aP) {
      this.artworkGrowFactor = 1;
    }
  }

  @Output() onArtworkPicked: EventEmitter<void> = new EventEmitter();

  artworkGrowFactor = 1;

  texture$!: Observable<Texture>;

  readonly side = DoubleSide;

  constructor(private textureLoader: NgtTextureLoader) {}

  ngOnInit(): void {
    this.texture$ = this.textureLoader.load(
      this.artwork.preview.replace(
        'imageserver-2022',
        'data-proxy/image.php?subpath='
      )
    );
  }

  pickArtwork() {
    this.artworkGrowFactor = 2;
    this.onArtworkPicked.emit();
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
      this.consts.xStart +
        (this.artwork.width / 100 / 2) * this.artworkGrowFactor,
      this.consts.yStart +
        (this.artwork.height / 100 / 2) * this.artworkGrowFactor,
      this.consts.zStart + this.posZ,
    ] as NgtVector3;
  }
}
