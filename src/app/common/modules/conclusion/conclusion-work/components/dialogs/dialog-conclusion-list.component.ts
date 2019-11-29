import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatListModule} from '@angular/material/list';

export interface Section {
  objectName: string;
  type: string;
}


@Component({
  selector:    'dialog-conclusion-list',
  templateUrl: 'dialog-conclusion-list.component.html',
})
export class DialogConclusionListComponent {
  conclusions: Section[] = [
    {
      objectName: 'Жилой дом № 7 г.Красноярск, ул.Мира 158',
      type: ' Проектная документация и результаты инженерных изысканий',
    },
    {
      objectName: 'Жилой дом № 7 г.Красноярск, ул.Мира 158',
      type: 'Проектная документация и результаты инженерных изысканий',
    },
    {
      objectName: 'Жилой дом № 7 г.Красноярск, ул.Мира 158',
      type: 'Проектная документация и результаты инженерных изысканий',
    },

  ];
}
