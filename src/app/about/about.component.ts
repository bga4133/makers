import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  hellow = 'Hola .                               ';
  name = '          Mi nombre es Rocio Camino.'
  years = 'Llevo más de 20 años trabajando en comunicación.'
  start = 'Empecé mi carrera en periodismo, aprendiendo el valor de un texto bien escrito y con carne, Luego de 6 años en los que trabaje también como editora en medios digitales(Discovery Networks / Wcitiles.com), Entro a Belcorp donde aprendo el manejo de comunicación estrategica y creativa desde la mirada de una corporación internacional.             '
  last = 'Los ultimos 6  años he colaborado con agencias de comunicación, y clientes de diversas áreas y sectores como directora creativa. Y en ese recorrido , he tenido la suerte de conocer  a un colectivo de creativos indepiendentes muy talentoso que, desde distintas disciplinas , hoy colabora conmigo para darle a tu comunicación la dirección que necesita para llegar al corazón de más personas            '
  ngOnInit() {
  }

}
