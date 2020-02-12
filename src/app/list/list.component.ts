import { Component, OnInit, Input, Output, EventEmitter, DoCheck } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, DoCheck {

  @Input() employees: Employee[];
  @Output() sendDept: EventEmitter<string>;

  deptSelected: string;

  constructor() {
    this.sendDept = new EventEmitter();
    this.deptSelected = 'All';
  }

  ngOnInit() {
  }

  ngDoCheck() {
    // Probar como resetear el filtrado de empleados al crear un nuevo empleados para que se vean todos (Investigar ngDoCheck o ngOnChanges)
  }

  handleChange($event) {
    this.deptSelected = $event.target.value;
    this.sendDept.emit($event.target.value);
  }

}
