// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataListComponent } from './data-list/data-list.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'data-list', component: DataListComponent },
  // Tambahkan rute lain jika diperlukan
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
