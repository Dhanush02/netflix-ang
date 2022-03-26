import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  @Input() flag: any;
  public trending: any = [];
  constructor(private popData: MovieService) {}
  ngOnInit(): void {
    this.getTrendingMovies();
  }

  getTrendingMovies = () => {
    this.popData.trendingAllData().subscribe((response) => {
      this.trending = response.results;
    });
  };
}
