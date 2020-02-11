import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dept',
  templateUrl: './dept.component.html',
  styleUrls: ['./dept.component.css']
})
export class DeptComponent implements OnInit {

  @Input() dept: string;

  constructor() { }

  ngOnInit() {
  }

}
