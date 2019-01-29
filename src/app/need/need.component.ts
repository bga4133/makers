import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-need',
  templateUrl: './need.component.html',
  styleUrls: ['./need.component.css']
})
export class NeedComponent implements OnInit {

  constructor() { }
  have = 'Tienes un nuevo proyecto?';
  start = 'Comenzar Proyecto';
  ngOnInit() {
  }

}
