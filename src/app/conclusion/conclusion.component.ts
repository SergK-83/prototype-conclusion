import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'conclusion',
  templateUrl: './conclusion.component.html',
  styleUrls: ['./conclusion.component.scss']
})
export class ConclusionComponent implements OnInit {
  links = [
    {name: 'Моя работа', path: '/conclusion'},
    {name: 'Все разделы', path: '/conclusion/general'},
    {name: 'Печатная форма', path: '/conclusion/print-form'}
    ];
  activeLink = this.links[0];

  constructor() { }

  ngOnInit() {
  }

}
