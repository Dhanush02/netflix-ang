import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
})
export class SeriesComponent implements OnInit {
  @Input() flag: any;
  public trending: any = [];
  constructor(private popData: MovieService) {}
  ngOnInit(): void {
    this.getTrendingMovies();
  }

  getTrendingMovies = () => {
    this.popData.TopRated().subscribe((response) => {
      this.trending = response.results;
    });
  };
}
