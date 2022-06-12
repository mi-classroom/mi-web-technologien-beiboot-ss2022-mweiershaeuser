import { NgtVector3 } from '@angular-three/core';
import { Component, Input, OnInit } from '@angular/core';
import Artwork from 'src/app/explore/models/artwork.model';
import { FrontSide, BackSide } from 'three';

@Component({
  selector: 'app-masterpiece',
  templateUrl: './masterpiece.component.html',
  styleUrls: ['./masterpiece.component.scss'],
})
export class MasterpieceComponent implements OnInit {
  @Input() position?: NgtVector3;
  @Input() artwork?: Artwork;

  readonly front = FrontSide;
  readonly back = BackSide;

  constructor() {}

  ngOnInit(): void {}

  getImage(): HTMLImageElement {
    const img = new Image();
    img.src = this.artwork ? this.artwork.preview : '';
    return img;
  }
}
