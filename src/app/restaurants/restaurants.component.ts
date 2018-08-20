import { Component, OnInit } from '@angular/core';

import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.service';
import { trigger, state, animate, transition, style } from '@angular/animations';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        "max-height": "0px" 
      })),
      state('visible', style({
        opacity: 1,
        "max-height": "20px",
        "margin": "20px 0 20px 0"
      })),
      transition('* <=> *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class RestaurantsComponent implements OnInit {

  searchBarState: string = 'hidden';

  restaurants: Restaurant[];

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.restaurantsService.restaurants()
      .subscribe( restaurants => this.restaurants = restaurants)
  }

  toggleSearch() :void {
    this.searchBarState = this.searchBarState == "hidden"? "visible": "hidden";
  }

}
