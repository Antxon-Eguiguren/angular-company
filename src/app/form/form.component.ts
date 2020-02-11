import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee';
import { FormGroup, FormControl } from '@angular/forms';

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
      name: new FormControl(),
      surname: new FormControl(),
      email: new FormControl(),
      department: new FormControl(),
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.sendEmployee.emit(this.form.value);
    this.form.reset();
  }

}
