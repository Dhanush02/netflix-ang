import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() results: any;
  @Input() flag: any;
  image_url = `https://image.tmdb.org/t/p/original/`;
  basicUrl = 'https://image.tmdb.org/t/p/original/';
  constructor(private movieData: MovieService, private route: Router) {}

  ngOnInit(): void {}
  getMovieId(e: any) {
    this.movieData.movie(e);
    this.route.navigate(['movies', e]);
  }
}
