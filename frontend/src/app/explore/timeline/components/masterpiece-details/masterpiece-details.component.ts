import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import Artwork from 'src/app/explore/models/artwork.model';
import * as constants from '../../constants';
import { ArtworksService } from '../../services/artworks/artworks.service';

@Component({
  selector: 'app-masterpiece-details',
  templateUrl: './masterpiece-details.component.html',
  styleUrls: ['./masterpiece-details.component.scss'],
})
export class MasterpieceDetailsComponent implements OnInit, OnDestroy {
  consts = constants;

  artwork?: Artwork;
  artworks: Artwork[] = [];

  highlightedArtworks: string[] = [];

  partOfWork: Artwork[] = [];
  belongsTo: Artwork[] = [];
  similarToOrRelatedInContentTo: Artwork[] = [];

  unsubscribe = new Subject<void>();

  constructor(private artworksService: ArtworksService) {}

  ngOnInit(): void {
    this.artworksService.pickedArtwork
      .pipe(takeUntil(this.unsubscribe))
      .subscribe({
        next: (pickedArtwork) => {
          this.artwork = pickedArtwork;
          this.artworksService.highlightedArtworks.next([]);
          this.getRelations();
        },
      });

    this.artworksService.artworks.pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (artworks) => {
        this.artworks = artworks;
        this.artworksService.highlightedArtworks.next([]);
        this.getRelations();
      },
    });

    this.artworksService.highlightedArtworks
      .pipe(takeUntil(this.unsubscribe))
      .subscribe({
        next: (highlightedArtworks) => {
          this.highlightedArtworks = highlightedArtworks;
        },
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getRelations() {
    this.partOfWork = [];
    this.belongsTo = [];
    this.similarToOrRelatedInContentTo = [];

    this.artwork?.relations.forEach((relation) => {
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

  addHighlights(relations: Artwork[]) {
    let highlights: string[];

    if (this.artwork) {
      highlights = [this.artwork.inventoryNumber];
    } else {
      highlights = [];
    }

    relations.forEach((r) => highlights.push(r.inventoryNumber));
    this.artworksService.highlightedArtworks.next(highlights);
  }

  removeHighlights() {
    this.artworksService.highlightedArtworks.next([]);
  }

  navigateToArtwork(artwork: Artwork) {
    const artworkIndex = this.artworks.findIndex(
      (a) => a.inventoryNumber === artwork.inventoryNumber
    );
    this.artworksService.cameraPosition.next([
      0,
      0,
      constants.cameraDistance - artworkIndex * constants.artworkDistance,
    ]);
  }

  onClose() {
    this.removeHighlights();
    this.artworksService.pickedArtwork.next(undefined);
  }
}
