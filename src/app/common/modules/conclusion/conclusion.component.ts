import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogConclusionListComponent} from './conclusion-work/components/dialogs/dialog-conclusion-list.component';

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

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialogConclusionList(): void {
    const dialogRef = this.dialog.open(DialogConclusionListComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
  }

}
