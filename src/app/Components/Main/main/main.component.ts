import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { MovieService } from './movie.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {

  public results: any = [];
  public popularMovies: any = [];
  public discoverMovies: any = [];
  public actionResults: any = [];
  public romanticResults: any = [];
  public comedyResults: any = [];
  public horrorResults: any = [];
  public documentaries: any = [];
  @Input() public flag: boolean = false;
  constructor(private router: Router, private popData: MovieService) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationStart && val.url === '/trending') {
        this.flag = true;
        console.log('set bool true');
      }
    });
  }

  ngOnInit(): void {
    this.getMainData();
    this.getPopularMovie();
    this.getDiscoverMovie();
    this.getActionMovies();
    this.getComedyMovies();
    this.getRomanticMovies();
    this.getHorrorMovies();
  }

  getActionMovies = () => {
    this.popData.ActionMovies().subscribe((response) => {
      this.actionResults = response.results;
    });
  };

  getRomanticMovies = () => {
    this.popData.RomanticMovies().subscribe((response) => {
      this.romanticResults = response.results;
    });
  };

  getHorrorMovies = () => {
    this.popData.HorrorMovies().subscribe((response) => {
      this.horrorResults = response.results;
    });
  };

  getComedyMovies = () => {
    this.popData.comedyMovies().subscribe((response) => {
      this.comedyResults = response.results;
    });
  };

  getPopularMovie = () => {
    this.popData.PopularMovie().subscribe((response) => {
      this.popularMovies = response.results;
    });
  };

  getDiscoverMovie = () => {
    this.popData.DiscoverMovie().subscribe((response) => {
      console.log(response);
      this.discoverMovies = response.results;
    });
  };

  getMainData = () => {
    this.popData.PopularData().subscribe((response) => {
      this.results = response.results;
    });
  };
}
