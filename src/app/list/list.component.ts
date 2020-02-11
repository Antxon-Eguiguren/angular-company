import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() employees: Employee;
  @Output() sendDept: EventEmitter<string>;

  constructor() {
    this.sendDept = new EventEmitter();
  }

  ngOnInit() {
  }

  handleChange($event) {
    this.sendDept.emit($event.target.value);
  }

}
