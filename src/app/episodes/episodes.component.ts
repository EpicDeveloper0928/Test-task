import { Episode } from './../types/episode';
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss'],
})
export class EpisodesComponent implements OnInit {
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getEpisodes().subscribe((res: Episode) => {
      res.results.map((val) => {
        val.characters = Object.assign({}, val.characters);
      });
      console.log(res);
    });
  }
}
