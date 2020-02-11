import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;

  @Output() sendEmployee: EventEmitter<Employee>;

  constructor() {
    this.sendEmployee = new EventEmitter();
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
      ]),
      surname: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/),
      ]),
      department: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.sendEmployee.emit(this.form.value);
    this.form.reset();
  }

}
