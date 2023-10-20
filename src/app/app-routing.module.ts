import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TODOAppComponent } from './Component/todoapp/todoapp.component';

const routes: Routes = [
  {
    path:'', 
    component:TODOAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
