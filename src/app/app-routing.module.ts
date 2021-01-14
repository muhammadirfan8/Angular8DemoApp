import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { GridComponent } from './grid/grid.component';
import { ChartsComponent } from './charts/charts.component';
import { DialogComponent } from './dialog/dialog.component';

const routes: Routes = [
 { path:'', component: GridComponent, pathMatch: 'full'},
 { path:'grid', component: GridComponent},
 { path:'buttons', component: ButtonsComponent },
 { path: 'charts', component: ChartsComponent },
 { path: 'dialog', component: DialogComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
