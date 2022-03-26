import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css'],
})
export class TrendingComponent implements OnInit {
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
