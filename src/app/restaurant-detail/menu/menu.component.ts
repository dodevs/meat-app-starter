import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestaurantsService } from '../../restaurants/restaurants.service';

import { Observable } from "rxjs/Observable";
import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>;
  restaurantId: string;

  constructor(
    private restaurantService: RestaurantsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.restaurantId = this.route.parent.snapshot.params['id'];
    this.menu = this.restaurantService.menuOfRestaurant(this.restaurantId);
  }

  addMenuItem(item: MenuItem) {
    console.log(item);
  }

}
