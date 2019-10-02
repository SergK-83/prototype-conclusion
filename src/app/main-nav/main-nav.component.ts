import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  links = [
    {name: 'Заключение', path: ''},
    {name: 'Заявление', path: 'declaration'},
    {name: 'Документация', path: 'documents'}
    ];
  activeLink = this.links[0];

  constructor() { }

  ngOnInit() {
  }

}
