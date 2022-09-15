import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { LoginService } from 'src/app/login/services/login/login.service';
import { environment } from 'src/environments/environment';
import Artwork from '../../models/artwork.model';

@Injectable({
  providedIn: 'root',
})
export class MasterpiecesApiService {
  baseUrl: string = environment.apiUrl;
  accessToken: string = '';

  constructor(private http: HttpClient, private loginService: LoginService) {
    this.loginService.hasAccessToken.subscribe({
      next: (accessToken) => {
        if (accessToken) {
          this.accessToken = accessToken;
        }
      },
    });
  }

  getMasterpieces(sortBy: string[]): Observable<Artwork[]> {
    let sortQuery = '';
    sortBy.forEach((sortAttribute, index) => {
      sortQuery += `sort[${index}]=${sortAttribute}&`;
    });
    return this.http
      .get<{ data: Array<{ attributes: Artwork }> }>(
        `${this.baseUrl}/artworks?${sortQuery}pagination[page]=1&pagination[pageSize]=200`,
        {
          headers: { Authorization: `Bearer ${this.accessToken}` },
        }
      )
      .pipe(
        map((response: { data: Array<{ attributes: Artwork }> }) => {
          let result: Artwork[] = [];
          response.data.forEach((dataObject) => {
            result.push({
              inventoryNumber: dataObject.attributes.inventoryNumber,
              title: dataObject.attributes.title,
              date: dataObject.attributes.date,
              category: dataObject.attributes.category,
              artist: dataObject.attributes.artist,
              owner: dataObject.attributes.owner,
              preview: dataObject.attributes.preview,
              sortingId: dataObject.attributes.sortingId,
              width: dataObject.attributes.width,
              height: dataObject.attributes.height,
              relations: dataObject.attributes.relations,
            });
          });
          return result;
        })
      );
  }
}
