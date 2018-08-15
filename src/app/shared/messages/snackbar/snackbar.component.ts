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
        opa
      })),
      state('visible', style({})),
      // transições
      transition('hidden => visible', animate('500ms 0s ease-in')), // animate('duracao delay easing)
      transition('visible => hidden', animate('500ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  message: string = 'Hello There!'

  constructor() { }

  ngOnInit() {
  }

}
