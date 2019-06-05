import { Component } from '@angular/core';

@Component({
  selector: 'ngi-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent {
  title = 'Star Wars: The Last Jedi';
  year = 2017;
  genre = 'Action, Adventure, Fantasy';
  plot = 'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.';
  poster = 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg';
  movieComment = '';
  commentSaved = false;

  saveComment() {
    this.commentSaved = !this.commentSaved;
  }

  wordCount() {
    if (!this.movieComment || this.movieComment.length === 0) {
      return 0;
    } else {
      return this.movieComment
        .trim()
        .replace(/  +/g, ' ')
        .split(' ').length;
    }
  }
}
