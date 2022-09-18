import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import Artwork from 'src/app/explore/models/artwork.model';
import * as constants from '../../constants';

@Component({
  selector: 'app-masterpiece-details',
  templateUrl: './masterpiece-details.component.html',
  styleUrls: ['./masterpiece-details.component.scss'],
})
export class MasterpieceDetailsComponent implements OnChanges {
  consts = constants;

  @Input() artwork!: Artwork;
  @Input() artworks!: Artwork[];
  @Output() close: EventEmitter<void> = new EventEmitter();

  partOfWork: Artwork[] = [];
  belongsTo: Artwork[] = [];
  similarToOrRelatedInContentTo: Artwork[] = [];

  constructor() {}

  ngOnChanges(): void {
    this.getRelations();
  }

  getRelations() {
    this.artwork.relations.forEach((relation) => {
      let relationArtwork;
      switch (relation.type) {
        case 'PART_OF_WORK':
          relationArtwork = this.artworks.find(
            (a) => a.inventoryNumber === relation.inventoryNumber
          );
          if (relationArtwork) {
            this.partOfWork.push(relationArtwork);
          }
          break;

        case 'BELONGS_TO':
          relationArtwork = this.artworks.find(
            (a) => a.inventoryNumber === relation.inventoryNumber
          );
          if (relationArtwork) {
            this.belongsTo.push(relationArtwork);
          }
          break;

        case 'SIMILAR_TO':
          relationArtwork = this.artworks.find(
            (a) => a.inventoryNumber === relation.inventoryNumber
          );
          if (relationArtwork) {
            this.similarToOrRelatedInContentTo.push(relationArtwork);
          }
          break;

        case 'RELATED_IN_CONTENT_TO':
          relationArtwork = this.artworks.find(
            (a) => a.inventoryNumber === relation.inventoryNumber
          );
          if (relationArtwork) {
            this.similarToOrRelatedInContentTo.push(relationArtwork);
          }
          break;
      }
    });
  }

  onClose() {
    this.close.emit();
  }
}
