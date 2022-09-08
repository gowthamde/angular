import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-generic-form-control',
  templateUrl: './generic-form-control.component.html',
  styleUrls: ['./generic-form-control.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: GenericFormControlComponent
  }]
})
export class GenericFormControlComponent implements OnInit, ControlValueAccessor  {

  // @ViewChild('input') input: ElementRef;
  disabled = false;
  value = '';
  @Input() type = 'text';
  @Input() label: string = '';
  @Input() placeholder: string;
  @Input() errorMsg: string;
  isSubmit = false;

  constructor() { }

  ngOnInit(): void {
  }
  writeValue(obj: any) {
    this.isSubmit = true;
    this.value = obj;
    console.log(this.value)
    // this.input.nativeElement.value = obj;
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  onChange() { 
    console.log(this.value)
  }
  onTouched() {
    console.log(this.value)
   }
}
