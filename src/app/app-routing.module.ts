import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { DetailsComponent } from './components/details/details.component';
import { FormComponent } from './components/form/form.component';
import { ErrorComponent } from './components/error/error.component';
 
const routes: Routes = [
  {path:"",component:IndexComponent},
  {path:"details/:id",component:DetailsComponent},
  {path:"form/:id",component:FormComponent},
  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
