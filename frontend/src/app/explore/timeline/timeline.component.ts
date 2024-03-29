import { NgtVector3 } from '@angular-three/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, take, takeUntil } from 'rxjs';
import Artwork from '../models/artwork.model';
import { MasterpiecesApiService } from '../services/masterpieces/masterpieces.api.service';
import * as constants from './constants';
import { ArtworksService } from './services/artworks/artworks.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit, OnDestroy {
  consts = constants;

  canvasEnabled = true;
  cameraPosition: NgtVector3 = [0, 0, 5];

  artworks: Artwork[] = [];
  artworkPicked = false;
  highlightMode = false;

  help = false;
  search = false;

  unsubscribe = new Subject<void>();

  constructor(
    private masterpieceApiService: MasterpiecesApiService,
    private artworksService: ArtworksService
  ) {}

  ngOnInit(): void {
    this.artworksService.artworks.pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (artworks) => {
        this.artworks = artworks;
      },
    });

    this.artworksService.pickedArtwork
      .pipe(takeUntil(this.unsubscribe))
      .subscribe({
        next: (pickedArtwork) => {
          if (pickedArtwork) {
            this.artworkPicked = true;
          } else {
            this.artworkPicked = false;
          }
        },
      });

    this.artworksService.highlightedArtworks
      .pipe(takeUntil(this.unsubscribe))
      .subscribe({
        next: (highlightedArtworks) => {
          this.highlightMode = highlightedArtworks.length > 0;
        },
      });

    this.artworksService.cameraPosition
      .pipe(takeUntil(this.unsubscribe))
      .subscribe({
        next: (cameraPosition) => {
          this.cameraPosition = cameraPosition;
          this.canvasEnabled = false;
          setTimeout(() => {
            this.canvasEnabled = true;
          }, 500);
        },
      });

    this.getMasterpieces();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getMasterpieces() {
    this.masterpieceApiService
      .getMasterpieces(['date'])
      .pipe(take(1))
      .subscribe({
        next: (artworks) => {
          this.artworksService.artworks.next(artworks);
        },
      });
  }
}
