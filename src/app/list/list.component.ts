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

    // Borro el empleado del array del LS, para que al recargar la página, ese empleado no aparezca, ya que se ha borrado. Para ello:
    // 1. Recupero todos los datos del LS.
    const arrEmployeesLS = JSON.parse(localStorage.getItem('array de empleados'));

    // 2. Busco el empleado y lo borro del array de empleados que he recuperado del LS.
    const positionLS = arrEmployeesLS.findIndex(employeeLS => {
      return employeeLS.name === $event.name;
    });
    if (positionLS !== -1) {
      arrEmployeesLS.splice(positionLS, 1);
    }

    // 3. Borro todos los datos del LS.
    localStorage.removeItem('array de empleados');

    // 4. Cargo en el LS el array de empleados actualizado (sin el empleado a despedir).
    localStorage.setItem('array de empleados', JSON.stringify(arrEmployeesLS));
  }

}
