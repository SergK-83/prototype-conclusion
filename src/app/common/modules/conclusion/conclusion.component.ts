import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'conclusion',
  templateUrl: './conclusion.component.html',
  styleUrls: ['./conclusion.component.scss']
})
export class ConclusionComponent implements OnInit {
  links = [
    {name: 'Моя работа', path: 'work'},
    {name: 'Все разделы', path: 'general'},
    {name: 'Печатная форма', path: 'print-form'}
    ];
  activeLink = this.links[0];

  constructor() { }

  ngOnInit() {
  }

}
