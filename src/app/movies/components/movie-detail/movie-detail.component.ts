import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'ngi-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movieId;
  movieModel;
  constructor(private route: ActivatedRoute, private movieService: MovieService, private router: Router) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(paramsMap => {
          this.movieId = paramsMap.get('id');
          return this.movieService.getMovie(this.movieId);
        })
      )
      .subscribe(movie => this.movieModel = movie);
  }

  onSubmit() {
    if (this.movieModel.id) {
      this.movieService
        .updateMovie(this.movieModel)
        .subscribe(this.goBack);
    } else {
      this.movieService
        .createMovie(this.movieModel)
        .subscribe(this.goBack);
    }
  }

  goBack = () => {
    this.router.navigate(['/movies']);
  }
}
