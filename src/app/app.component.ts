import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private fb: FormBuilder) {

  }
  submitForm() {
    console.log(this.form)
  }
  title = 'angular-api-ref';
  form = this.fb.group({
    name: ['',[Validators.required]],
    // github: [''],
    // website: [''],
    // server: [''],
    // communications: [[]]
  });
}
