import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector:    'dialog-conclusion-templates',
  templateUrl: 'dialog-conclusion-templates.component.html',
})
export class DialogConclusionTemplatesComponent {

  conclusionTemplateSelected: string;

  conclusionTemplates: string[] = [
    'Проектная документация и результаты инженерных изысканий',
    'Проектная документация',
    'Результаты инженерных изысканий',
    'Настраиваемый шаблон'
  ];
}
