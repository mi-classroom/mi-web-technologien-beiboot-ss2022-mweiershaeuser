import { Component, Input } from '@angular/core';
import Artwork from '../../models/artwork.model';

@Component({
  selector: 'app-masterpiece-preview',
  templateUrl: './masterpiece-preview.component.html',
  styleUrls: ['./masterpiece-preview.component.scss'],
})
export class MasterpiecePreviewComponent {
  @Input() artwork?: Artwork;
}
