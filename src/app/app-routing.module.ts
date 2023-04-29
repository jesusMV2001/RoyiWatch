import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { DetailsComponent } from './components/details/details.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {path:"index",component:IndexComponent},
  {path:"details/:id",component:DetailsComponent},
  {path:"form/:id",component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
