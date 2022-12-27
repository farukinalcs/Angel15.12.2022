import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessdashboardComponent } from './accessdashboard/accessdashboard.component';
import { RouterModule } from '@angular/router';
import { SicillisteComponent } from './sicilliste/sicilliste.component';
import { TerminalComponent } from './terminal/terminal.component';
import { GecisgruplariComponent } from './gecisgruplari/gecisgruplari.component';
import { TanimlamalarComponent } from './tanimlamalar/tanimlamalar.component';
import { RaporlarComponent } from './raporlar/raporlar.component';
import { AccessDataWidgetComponent } from './access-data-widget/access-data-widget.component';



@NgModule({
  declarations: [
    AccessdashboardComponent,
    SicillisteComponent,
    TerminalComponent,
    GecisgruplariComponent,
    TanimlamalarComponent,
    RaporlarComponent,
    AccessDataWidgetComponent
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
