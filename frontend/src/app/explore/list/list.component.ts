import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import Artwork from '../models/artwork.model';
import { MasterpiecesApiService } from '../services/masterpieces/masterpieces.api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  artworks: Artwork[] = [];
  error: boolean = false;

  constructor(private masterpieceApiService: MasterpiecesApiService) {}

  ngOnInit(): void {
    this.getMasterpieces();
  }

  getMasterpieces() {
    this.masterpieceApiService
      .getMasterpieces(['sortingId'])
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
