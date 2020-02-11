import { Component } from '@angular/core';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrEmployees: Employee[];
  deptSelected: string;

  constructor() {
    this.arrEmployees = [
      new Employee('Antxon', 'Eguiguren', 'antxone@gmail.com', 'Marketing'),
      new Employee('Julia', 'Besada', 'julia@gmail.com', 'HR'),
      new Employee('Aitziber', 'Redondo', 'aitziber@gmail.com', 'Development'),
      new Employee('Jorge', 'Torroglosa', 'jorge@gmail.com', 'Design'),
    ];
    this.deptSelected = 'All';
  }

  handleEmployee($event) {
    const employee = new Employee($event.name, $event.surname, $event.email, $event.department);
    this.arrEmployees.push(employee);
  }

  handleSendDept($event) {
    this.deptSelected = $event;
  }

}
