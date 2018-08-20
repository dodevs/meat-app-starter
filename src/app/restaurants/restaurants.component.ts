import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'; //Form dependences

import { Observable } from 'rxjs/Observable'
import 'rxjs/operator/switchMap';
import 'rxjs/operator/do';
import 'rxjs/operator/debounceTime' // Adiciona um tempo entre as requisições
import 'rxjs/operator/distinctUntilChanged'; // Processa somente valores distintos
import 'rxjs/add/operator/catch' // Trata erros
import 'rxjs/add/observable/from'

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
      .debounceTime(500)
      .distinctUntilChanged()
      // .do(searchTerm => console.log(`q=${searchTerm}`)) // O que fazer antes de tudo
      .switchMap( searchTerm =>
        this.restaurantsService
          .restaurants(searchTerm)
          .catch(error => Observable.from([]))) // Se der error retorna um Stream vazio
      .subscribe( restaurants => 
        this.restaurants = restaurants) // Aqui o conteudo que chega já está filtrado


    this.restaurantsService.restaurants()
      .subscribe( restaurants => this.restaurants = restaurants)
  }

  toggleSearch() :void {
    this.searchBarState = this.searchBarState == "hidden"? "visible": "hidden";
  }

}
