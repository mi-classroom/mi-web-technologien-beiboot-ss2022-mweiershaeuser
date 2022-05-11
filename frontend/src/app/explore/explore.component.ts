import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, take, takeUntil } from 'rxjs';
import Artwork from './models/artwork.model';
import { MasterpiecesApiService } from './services/masterpieces/masterpieces.api.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent implements OnInit, OnDestroy {
  artworks: Artwork[] = [];
  error: boolean = false;

  endpoint: string = '';
  apiToken: string = '';

  unsubscribe = new Subject<void>();

  constructor(private masterpieceApiService: MasterpiecesApiService) {}

  ngOnInit(): void {
    this.masterpieceApiService.baseUrl$
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((bU) => {
        if (this.endpoint !== bU) {
          this.endpoint = bU;
        }

        this.getMasterpieces();
      });

    this.masterpieceApiService.apiToken$
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((aT) => {
        if (this.apiToken !== aT) {
          this.apiToken = aT;
        }

        this.getMasterpieces();
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getMasterpieces() {
    this.masterpieceApiService
      .getMasterpieces()
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

  updateEndpoint() {
    this.masterpieceApiService.baseUrl$.next(this.endpoint);
  }

  updateApiToken() {
    this.masterpieceApiService.apiToken$.next(this.apiToken);
  }
}
