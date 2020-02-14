import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() employees: Employee[];
  @Output() sendDept: EventEmitter<string>;

  deptSelected: string;

  constructor() {
    this.sendDept = new EventEmitter();
    this.deptSelected = 'All';
  }

  ngOnInit() {
  }

  handleChange($event) {
    this.deptSelected = $event.target.value;
    this.sendDept.emit($event.target.value);
  }

  handleEmitFire($event) {
    const position = this.employees.findIndex(employee => {
      return employee.name === $event.name;
    });
    if (position !== -1) {
      this.employees.splice(position, 1);
    }
  }

}
