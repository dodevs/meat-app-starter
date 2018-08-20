import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Restaurant } from './restaurant/restaurant.model';

import { MEAT_API } from '../app.api';
import { ErrorHandler } from '../app.error-handler';
import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";

@Injectable()
export class RestaurantsService {

  constructor(private http:HttpClient) { }

  /*
   * @param search - opcional param for search
   */
  restaurants(search?:string): Observable<Restaurant[]> {
    return this.http.get(`${MEAT_API}/restaurants`, {params: {q: search}}) //Parametro q (query) - busca em todos os dados do restaurante
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
  }

  reviewsOfRestaurant(id: string): Observable<any>{
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)
  }
}
