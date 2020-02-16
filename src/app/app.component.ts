import { Component, OnInit } from '@angular/core';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  arrEmployees: Employee[];
  deptSelected: string;

  constructor() {
    this.deptSelected = 'All';
  }

  ngOnInit() {
    // Cuando arranco la aplicación, recupero del LS el array de empleados para poder trabajar con él. Si está vacío, lo inicializo a vacío para poder hacer push cuando creo el empleado (sino me da error). Si tiene datos, los recojo para empezar a trabajar con ellos.
    if (JSON.parse(localStorage.getItem('array de empleados')) === null) {
      this.arrEmployees = new Array();
    } else {
      this.arrEmployees = JSON.parse(localStorage.getItem('array de empleados'));
    }
  }

  handleEmployee($event) {
    // Cada vez que se crea un nuevo empleado, lo meto en el array de empleados para poder trabajar con él y además lo guardo en LS para que al recargar la página ese empleado no se pierda.
    const employee = new Employee($event.name, $event.surname, $event.email, $event.department);
    this.arrEmployees.push(employee);
    localStorage.setItem('array de empleados', JSON.stringify(this.arrEmployees));
  }

  handleSendDept($event) {
    this.deptSelected = $event;
  }

}
