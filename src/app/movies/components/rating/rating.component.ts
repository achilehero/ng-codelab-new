import { Component, Output, Input, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ngi-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnChanges {
  @Input() rating;
  @Output() ratingChange = new EventEmitter();
  starStates = [ false, false, false, false, false ];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.rating) {
      this.updateRating(changes.rating.currentValue);
    }
  }

  handleRatingClick(ratingIndex) {
    this.ratingChange.emit(ratingIndex);
  }

  updateRating(newRating) {
    this.starStates = this.starStates.map(
      (state, index) => index < newRating,
    );
  }
}
