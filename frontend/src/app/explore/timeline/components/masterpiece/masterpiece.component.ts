import { NgtVector3 } from '@angular-three/core';
import { NgtTextureLoader } from '@angular-three/soba/loaders';
import { Component, Input, OnInit } from '@angular/core';
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

  artworkInfo: string = '';
  showInfo = false;
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

    this.artworkInfo = `
    Titel: ${this.artwork.title}
    Künstler: ${this.artwork.artist}
    Art des Werks: ${this.artwork.category}
    Besitzer: ${this.artwork.owner}
    `;
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
