import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestaurantsService } from '../restaurants/restaurants.service';
import { Restaurant } from "app/restaurants/restaurant/restaurant.model";

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;
  restaurantId: string;

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantsService
  ) { }

  ngOnInit() {
    this.restaurantId = this.route.snapshot.params['id'];

    this.restaurantService.restaurantById(this.restaurantId)
      .subscribe(restaurant => this.restaurant = restaurant)
  }

}
