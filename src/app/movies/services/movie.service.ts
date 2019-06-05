import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: BehaviorSubject<Movie[]> = new BehaviorSubject([]);
  private apiUrl = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) {}

  getMovies() {
    return this.movies.asObservable();
  }

  loadAll() {
    this.http.get<Movie[]>(this.apiUrl)
      .subscribe(data => {
        this.movies.next(data);
      });
  }

  updateComment(movieId, newComment) {
    const moviesValue = this.movies.getValue();
    let movie = moviesValue.find(m => m.id === movieId);
    movie = {...movie, comment: newComment};
    this.http
      .put(`${this.apiUrl}/${movieId}`, movie)
      .pipe(switchMap(() => this.http.get<Movie[]>(this.apiUrl)))
      .subscribe(data => {
        this.movies.next(data);
      });
  }

  deleteMovie(movieId) {
    this.http
      .delete(`${this.apiUrl}/${movieId}`)
      .pipe(switchMap(() => this.http.get<Movie[]>(this.apiUrl)))
      .subscribe(data => {
        this.movies.next(data);
      });
  }

  searchMovie(searchTerm) {
    this.http
      .get<Movie[]>(`${this.apiUrl}?q=${searchTerm.trim()}`)
      .subscribe(data => {
        this.movies.next(data);
      });
  }
}
