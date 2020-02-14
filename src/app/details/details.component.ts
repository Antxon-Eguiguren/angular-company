import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() employee: Employee;
  @Output() emitFire: EventEmitter<Employee>;

  constructor() {
    this.emitFire = new EventEmitter();
  }

  ngOnInit() {
  }

  handleClickSuspend() {
    this.employee.active = !this.employee.active;
  }

  handleClickFire() {
    this.emitFire.emit(this.employee);
  }

}
