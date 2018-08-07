import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms'

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit{

  input: any;

  @Input() label: string;
  @Input() errorMessage: string

  // Decorator  diretiva  nome   tipo
  @ContentChild(NgModel) model: NgModel;

  constructor() { }

  ngOnInit() {
  }

  // Assim que for definido oq vai ficar no lugar de ng-content
  ngAfterContentInit() {
    this.input = this.model;
    if(this.input === undefined){
      throw new Error("Esse componente precisa ser usado com uma diretiva ngModel")
    }
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched);
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched);
  }

}
