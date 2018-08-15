import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MenuItem } from './menu-item.model';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  animations: [
    trigger('itemAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translateY(-10px)'}),
        animate('300ms 0s ease-in-out')
      ])
    ])
  ]
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem;
  @Output() add = new EventEmitter(); // Propriedade de saida
  itemState: string = 'ready';

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent(){
    this.add.emit(this.menuItem);
  }

}
