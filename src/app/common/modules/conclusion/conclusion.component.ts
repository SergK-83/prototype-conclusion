import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'conclusion',
  templateUrl: './conclusion.component.html',
  styleUrls: ['./conclusion.component.scss']
})
export class ConclusionComponent implements OnInit {
  links = [
    {name: 'Моя работа', path: 'work', icon: 'work_outline'},
    {name: 'Все разделы', path: 'general', icon: 'description'},
    {name: 'Печатная форма', path: 'print-form', icon: 'print'}
    ];
  activeLink = this.links[0];

  constructor() { }

  ngOnInit() {
  }

}
