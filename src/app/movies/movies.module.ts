import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material.module';

import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieListComponent } from '../movies/components/movie-list/movie-list.component';
import { RatingComponent } from '../movies/components/rating/rating.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [MovieItemComponent, MovieListComponent, RatingComponent],
  exports: [MovieListComponent]
})
export class MoviesModule {}
