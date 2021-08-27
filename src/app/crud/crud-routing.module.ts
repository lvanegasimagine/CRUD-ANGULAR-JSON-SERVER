import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: 'crud/home', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'crud/home' },
  { path: 'crud/details/:productId', component: DetailsComponent },
  { path: 'crud/create', component: CreateComponent },
  { path: 'crud/update/:productId', component: UpdateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
