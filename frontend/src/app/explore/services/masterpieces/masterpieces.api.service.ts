import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import Artwork from '../../models/artwork.model';

@Injectable({
  providedIn: 'root',
})
export class MasterpiecesApiService {
  baseUrl$ = new BehaviorSubject<string>('http://localhost:1337/api');
  apiToken$ = new BehaviorSubject<string>('');

  baseUrl: string = '';
  apiToken: string = '';

  constructor(private http: HttpClient) {
    this.baseUrl$.subscribe((bU) => {
      this.baseUrl = bU;
    });
    this.apiToken$.subscribe((aT) => {
      this.apiToken = aT;
    });
  }

  getMasterpieces(): Observable<Artwork[]> {
    return this.http
      .get<{ data: Array<{ attributes: Artwork }> }>(
        `${this.baseUrl}/artworks?sort[0]=sortingId&pagination[page]=1&pagination[pageSize]=200`,
        {
          headers: { Authorization: `Bearer ${this.apiToken}` },
        }
      )
      .pipe(
        map((response: { data: Array<{ attributes: Artwork }> }) => {
          let result: Artwork[] = [];
          response.data.forEach((dataObject) => {
            result.push({
              title: dataObject.attributes.title,
              date: dataObject.attributes.date,
              category: dataObject.attributes.category,
              owner: dataObject.attributes.owner,
              preview: dataObject.attributes.preview,
              sortingId: dataObject.attributes.sortingId,
            });
          });
          return result;
        })
      );
  }
}
