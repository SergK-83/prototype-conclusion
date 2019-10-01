import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  links = [{name: 'Заявление', path: ''}, {name: 'Документация', path: 'documents'}, {name: 'Заключение', path: 'conclusion'}];
  activeLink = this.links[2];

  constructor() { }

  ngOnInit() {
  }

}
