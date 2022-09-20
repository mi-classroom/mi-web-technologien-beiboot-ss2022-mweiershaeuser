import { Component, Input } from '@angular/core';
import * as constants from '../../constants';
import Artwork from 'src/app/explore/models/artwork.model';

@Component({
  selector: 'app-masterpiece-preview',
  templateUrl: './masterpiece-preview.component.html',
  styleUrls: ['./masterpiece-preview.component.scss'],
})
export class MasterpiecePreviewComponent {
  consts = constants;

  @Input() artwork?: Artwork;
}
