import { Component, OnInit, Input } from '@angular/core';

import { RadioOption } from './radio-option.module';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html'
})
export class RadioComponent implements OnInit {

  @Input() options: RadioOption[];

  constructor() { }

  ngOnInit() {
  }

}
