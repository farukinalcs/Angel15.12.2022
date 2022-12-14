import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessdashboardComponent } from './accessdashboard/accessdashboard.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AccessdashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AccessdashboardComponent,
      },
    ]),
  ]
})
export class AccessModule { }
