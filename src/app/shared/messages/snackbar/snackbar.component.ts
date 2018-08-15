import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

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

  constructor() { }

  ngOnInit() {
  }

}
