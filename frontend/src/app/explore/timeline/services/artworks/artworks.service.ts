import { NgtVector3 } from '@angular-three/core';
import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import Artwork from 'src/app/explore/models/artwork.model';
import * as constants from '../../constants';

@Injectable({
  providedIn: 'root',
})
export class ArtworksService {
  artworks = new BehaviorSubject<Artwork[]>([]);

  pickedArtwork = new ReplaySubject<Artwork | undefined>(1);
  highlightedArtworks = new BehaviorSubject<string[]>([]);

  cameraPosition = new BehaviorSubject<NgtVector3>([
    constants.xCameraStart,
    constants.yCameraStart,
    constants.zCameraStart,
  ]);

  constructor() {}
}
