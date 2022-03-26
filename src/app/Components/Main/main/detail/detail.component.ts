import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  results: any = [];
  basicUrl = 'https://image.tmdb.org/t/p/original';
  id: Number = 0;
  constructor(private homeData: MovieService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.homeData.movie(this.id).subscribe((response: any) => {
        this.results = response;
        console.log('Particular Movie', this.results);
      });
    });
  }
}
