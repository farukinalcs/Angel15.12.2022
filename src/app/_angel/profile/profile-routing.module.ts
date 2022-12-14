import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfiledashboardComponent } from './profiledashboard/profiledashboard.component';
import { Routes,RouterModule } from '@angular/router';
import { GecislerimComponent } from './islemler/gecislerim/gecislerim.component';
import { IzinlerimComponent } from './islemler/izinlerim/izinlerim.component';
import { SurelerimComponent } from './islemler/surelerim/surelerim.component';

const routes: Routes = [
  {
    path: '',
    component: ProfiledashboardComponent,
    children: [
      {
        path: 'gecislerim',
        component: GecislerimComponent,
      },
      {
        path: 'izinlerim',
        component: IzinlerimComponent,
      },
      {
        path: 'surelerim',
        component: SurelerimComponent,
      },
      { path: '', redirectTo: 'gecislerim', pathMatch: 'full' },
      { path: '**', redirectTo: 'gecislerim', pathMatch: 'full' },
    ],
  },
];


@NgModule({
  // declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ], exports: [RouterModule],
})
export class ProfileRoutingModule { }
