import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import Artwork from 'src/app/explore/models/artwork.model';
import { ArtworksService } from '../../services/artworks/artworks.service';
import * as constants from '../../constants';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  @Output() close: EventEmitter<void> = new EventEmitter();

  artworks: Artwork[] = [];

  search = '';
  matches: Artwork[] = [];

  unsubscribe = new Subject<void>();

  constructor(private artworksService: ArtworksService) {}

  ngOnInit(): void {
    this.artworksService.artworks.pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (artworks) => {
        this.artworks = artworks;
      },
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  filter() {
    this.matches = this.artworks.filter(
      (a) =>
        a.title.toLowerCase().includes(this.search.toLowerCase()) ||
        `${a.date}`.includes(this.search)
    );
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
}
