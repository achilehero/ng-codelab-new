import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../model/movie';

@Component({
  selector: 'ngi-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies: Movie[];
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMovies().subscribe((data) => {
      this.movies = data;
    });
  }

  handleCommentUpdate(commentPayload) {
    this.movieService.updateComment(commentPayload.id, commentPayload.newComment);
  }

  handleMovieDelete(movieId) {
    this.movieService.deleteMovie(movieId);
  }
}
