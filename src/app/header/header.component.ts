import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
    title = 'Header';
    item1 = 'HOME';
    item2 = 'SERVICIOS';
    item3 = 'PROYECTOS';
    item4 = 'CLIENTES';
    item5 = 'QUIÉN SOY';
    item6 = 'CONTACTO';
  ngOnInit() {
  }

}
