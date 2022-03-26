import { MoviesComponent } from './Components/Main/main/movies/movies.component';
import { SeriesComponent } from './Components/Main/main/series/series.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './Components/Login/login/login.component';
import { DetailComponent } from './Components/Main/main/detail/detail.component';
import { MainComponent } from './Components/Main/main/main.component';
import { TrendingComponent } from './Components/Main/main/trending/trending.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: MainComponent },
  { path: 'trending', component: TrendingComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'movies', component: MoviesComponent },
  {
    path: 'movies/:id',
    component: DetailComponent,
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
