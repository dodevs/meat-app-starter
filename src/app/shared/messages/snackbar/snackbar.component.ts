import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NotificationService } from '../notification.service';
import { Observable } from 'rxjs';
/* Operadores a serem usados com o Obersvable */
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    /*
     * @param 'snack-visibilty' - nome da animação
     * @param <Array> - definições
     */
    trigger('snack-visibility', [
      // estado da animação com estilo
      state('hidden', style({
        opacity: 0,
        bottom: '0px'
      })),
      state('visible', style({
        opacity: 1,
        bottom: '30px'
      })),
      // transições
      transition('hidden => visible', animate('500ms 0s ease-in')), // animate('duracao delay easing)
      transition('visible => hidden', animate('500ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  message: string = 'Hello There!'

  snackVisibility: string = 'hidden';

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    // subscribe: coloca um listener no observable, e só a partir disso é q o observable vai nos notificar
    // do: permite executar uma ação no instante que chega a mensagem
    // switchMap: trocar o observable, quando é chega uma nova mensagem é feito o unsubscribe do Observable antigo
    this.notificationService.notifier
      .do(message => {
        this.message = message
        this.snackVisibility = 'visible'
      }).switchMap(message => Observable.timer(2000))
        .subscribe(timer => this.snackVisibility = 'hidden')
  }

}
