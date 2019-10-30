import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {MaterialAppModule} from '../../../ngmaterial.module';

import {ConclusionGeneralComponent} from './conclusion-general/conclusion-general.component';
import {ConclusionPrintingFormComponent} from './conclusion-printing-form/conclusion-printing-form.component';
import {ConclusionWorkComponent} from './conclusion-work/conclusion-work.component';
import {ConclusionComponent} from './conclusion.component';

const routes: Routes = [
  {
    path: '',
    component: ConclusionComponent,
    children: [
      {
        path: 'work',
        component: ConclusionWorkComponent
      },
      {
        path: 'general',
        component: ConclusionGeneralComponent
      },
      {
        path: 'print-form',
        component: ConclusionPrintingFormComponent
      },
      {
        path: '',
        redirectTo: 'work'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MaterialAppModule
  ],
  declarations: [
    ConclusionComponent,
    ConclusionWorkComponent,
    ConclusionGeneralComponent,
    ConclusionPrintingFormComponent
  ]
})
export  class ConclusionModule {}
