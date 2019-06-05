import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material.module';

import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieListComponent } from '../movies/components/movie-list/movie-list.component';
import { RatingComponent } from '../movies/components/rating/rating.component';
import { MovieImageFallbackDirective } from '../movies/directives/movie-image-fallback.directive';
import { WordCountPipe } from './pipes/word-count.pipe';
import { MovieDetailComponent } from '../movies/components/movie-detail/movie-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forChild([
      {
        path: '',
        component: MovieListComponent,
      },
      {
        path: 'new',
        component: MovieDetailComponent
      },
      {
        path: ':id',
        component: MovieDetailComponent
      }
    ])
  ],
  declarations: [MovieItemComponent, MovieListComponent, RatingComponent, MovieImageFallbackDirective, WordCountPipe, MovieDetailComponent],
  exports: [MovieListComponent]
})
export class MoviesModule {}
