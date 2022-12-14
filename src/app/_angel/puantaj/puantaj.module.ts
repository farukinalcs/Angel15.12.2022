import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuantajdashboardComponent } from './puantajdashboard/puantajdashboard.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PuantajdashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PuantajdashboardComponent,
      },
    ]),
  ]
})
export class PuantajModule { }
