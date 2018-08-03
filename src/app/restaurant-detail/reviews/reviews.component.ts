import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestaurantsService } from '../../restaurants/restaurants.service';

import { Observable } from "rxjs/Observable";

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>;
  restaurantId: string;

  constructor(
    private restaurantService: RestaurantsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Acessa o parametro da rota pai
    this.restaurantId = this.route.parent.snapshot.params['id'];
    this.reviews = this.restaurantService.reviewsOfRestaurant(this.restaurantId);
  }

}
