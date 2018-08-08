import { Component, OnInit, Input, forwardRef } from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'

import { RadioOption } from './radio-option.module';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR, // Token para registar o componente no framework
      useExisting: forwardRef(()=> RadioComponent), // Uma referencia de que vai estar disponivel posteriormente
      multi: true
    }
  ]
})
// A interface ControlValueAccessor é implementada para que o o componente personalizado seja reconhecido como
// um componente de formulario e possa interagir com os controles de entrada de dados
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() options: RadioOption[];

  value: any;
  onChange: any;

  constructor() { }

  ngOnInit() {
  }

  setValue(value) {
    this.value = value;
    this.onChange(this.value);
  }

  /**
   * Write a new value to the element.
   */
  writeValue(obj: any): void {
    this.value = obj;
  }
  /**
   * Set the function to be called when the control receives a change event.
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  /**
   * Set the function to be called when the control receives a touch event.
   */
  registerOnTouched(fn: any): void {}
  /**
   * This function is called when the control status changes to or from "DISABLED".
   * Depending on the value, it will enable or disable the appropriate DOM element.
   *
   * @param isDisabled
   */
  setDisabledState?(isDisabled: boolean): void {}

}
