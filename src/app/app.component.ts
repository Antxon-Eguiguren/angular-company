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
  }

  handleEmployee($event) {
    this.arrEmployees.push($event);
  }

  handleSendDept($event) {
    this.deptSelected = $event;
  }

}
