import { Observable, of } from 'rxjs';
import Artwork from '../../models/artwork.model';

export class MasterpiecesApiServiceMock {
  constructor() {}

  getMasterpieces(): Observable<Artwork[]> {
    return of();
  }
}
