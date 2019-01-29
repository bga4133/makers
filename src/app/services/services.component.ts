import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }
  ourServices = 'NUESTROS SERVICIOS';
  identity = 'Identidad';
  content = 'Contenido Estrategico';
  comunication = 'Campañas de comunicación';
  support = 'Soporte Creativo Inhouse';
  text1 = ' es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos';
  ngOnInit() {
  }

}
