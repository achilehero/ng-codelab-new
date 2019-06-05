import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngi-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  @Input() movie;
  @Output() commentUpdate = new EventEmitter();
  @Output() movieDelete = new EventEmitter();

  commentSaved;
  movieComment;
  movieRating = 1;

  ngOnInit() {
    this.movieComment = this.movie.comment;
    this.commentSaved = this.movieComment.length > 0;
  }

  saveComment() {
    if (!this.commentSaved) {
      const payload = {
        id: this.movie.id,
        newComment: this.movieComment
      };
      this.commentUpdate.emit(payload);
    }
    this.commentSaved = !this.commentSaved;
  }

  handleDelete() {
    this.movieDelete.emit(this.movie.id);
  }
}
