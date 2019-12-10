import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogConclusionListComponent} from '../dialogs/dialog-conclusion-list/dialog-conclusion-list.component';

@Component({
  selector:    'expert-work',
  templateUrl: 'expert-work.component.html',
})
export class ExpertWorkComponent {
  simplebarOptions = { autoHide: false, scrollbarMinSize: 100 };

  constructor(public dialog: MatDialog) {}

  openDialogConclusionList(): void {
    const dialogRef = this.dialog.open(DialogConclusionListComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
