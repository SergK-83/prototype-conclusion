import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector:    'expert-work',
  templateUrl: 'expert-work.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpertWorkComponent {
  simplebarOptions = { autoHide: false, scrollbarMinSize: 100 };
}
