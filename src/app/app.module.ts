import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/Login/login/login.component';
import { MainComponent } from './Components/Main/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './Components/Main/main/card/card.component';
import { TrendingComponent } from './Components/Main/main/trending/trending.component';
import { NavbarComponent } from './Components/Main/main/navbar/navbar.component';
import { DetailComponent } from './Components/Main/main/detail/detail.component';
import { SeriesComponent } from './Components/Main/main/series/series.component';
import { MoviesComponent } from './Components/Main/main/movies/movies.component';
@NgModule({
  declarations: [AppComponent, LoginComponent, MainComponent, CardComponent, TrendingComponent, NavbarComponent, DetailComponent, SeriesComponent, MoviesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
