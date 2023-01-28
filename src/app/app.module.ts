import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieEffects } from './_store/movie/movie.effects';
import { movieReducer } from './_store/movie/movie.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ movies: movieReducer }),
    HttpClientModule,
    EffectsModule.forRoot([MovieEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
