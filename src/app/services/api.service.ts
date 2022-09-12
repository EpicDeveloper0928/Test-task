import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Episode } from './../types/episode';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getEpisodes() {
    return this.httpClient.get<Episode>(
      'https://rickandmortyapi.com/api/episode'
    );
  }
}
