import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  @Output() rated = new EventEmitter<number>(); // Um valor ira ser emitido
  rates: number[] = [1,2,3,4,5];
  rate: number = 0;
  previousRate: number;

  constructor() { }

  ngOnInit() {
  }

  setRate(rating: number) {
    this.rate = rating;
    this.previousRate = undefined
    this.rated.emit(this.rate);
  }

  setTempRate(rating: number){
    if(this.previousRate == undefined){
      this.previousRate = this.rate
    }
    this.rate = rating
  }

  clearTemprate(){
    if (this.previousRate !== undefined){
      this.rate = this.previousRate
      this.previousRate = undefined
    }
  }

}
