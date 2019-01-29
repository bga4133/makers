import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }
  projects = 'PROYECTOS';
  item1 = 'TODO';
  item2 = 'IDENTIDAD';
  item3 = 'CONTENIDO ESTRATEGICO';
  item4 = 'CAMPAÑAS DE COMUNICACIÓN';
  carpe = 'CARPE DEAM';
  info = 'CAMPAÑAS DE COMUNICACIÓN';
  ngOnInit() {
  }

}
