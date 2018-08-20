import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'; //Form dependences
import 'rxjs/operator/switchMap';

import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.service';

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

  searchForm: FormGroup;
  searchControl: FormControl

  constructor(
    private restaurantsService: RestaurantsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.searchControl = this.formBuilder.control('');
    this.searchForm = this.formBuilder.group({
      searchControl: this.searchControl
    })

    // valueChanges retorna o termo buscado que vem de um observable
    this.searchControl.valueChanges
      .switchMap( searchTerm => this.restaurantsService.restaurants(searchTerm))
      .subscribe( restaurants => this.restaurants = restaurants) // Aqui o conteudo que chega já está filtrado

    this.restaurantsService.restaurants()
      .subscribe( restaurants => this.restaurants = restaurants)
  }

  toggleSearch() :void {
    this.searchBarState = this.searchBarState == "hidden"? "visible": "hidden";
  }

}
