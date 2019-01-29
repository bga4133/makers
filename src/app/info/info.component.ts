import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor() { }
  firtsTitle = 'Qué';
  tell = 'decir';
  comunicate = 'comunicar';
  secondTitle = 'Como';
  arrive = "llegar";
  ngOnInit() {
  }

}
