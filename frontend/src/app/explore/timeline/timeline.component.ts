import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import Artwork from '../models/artwork.model';
import { MasterpiecesApiService } from '../services/masterpieces/masterpieces.api.service';
import * as constants from './constants';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  consts = constants;

  artworks: Artwork[] = [];
  error: boolean = false;

  pickedArtwork?: Artwork;

  constructor(private masterpieceApiService: MasterpiecesApiService) {}

  ngOnInit(): void {
    this.getMasterpieces();
  }

  getMasterpieces() {
    this.masterpieceApiService
      .getMasterpieces(['date'])
      .pipe(take(1))
      .subscribe({
        next: (artworks) => {
          this.artworks = artworks;
          this.error = false;
        },
        error: () => {
          this.error = true;
        },
      });
  }
}
