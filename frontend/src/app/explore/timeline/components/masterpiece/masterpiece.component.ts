import { NgtVector3 } from '@angular-three/core';
import { NgtTextureLoader } from '@angular-three/soba/loaders';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Artwork from 'src/app/explore/models/artwork.model';
import { Texture, DoubleSide } from 'three';

@Component({
  selector: 'app-masterpiece',
  templateUrl: './masterpiece.component.html',
  styleUrls: ['./masterpiece.component.scss'],
  providers: [NgtTextureLoader],
})
export class MasterpieceComponent implements OnInit {
  @Input() position!: NgtVector3;
  @Input() yearPosition!: NgtVector3;
  @Input() artwork!: Artwork;

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
}
