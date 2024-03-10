import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllItemsComponent } from './items/components/all-items/all-items.component';
import { ItemsDetailComponent } from './items/components/items-detail/items-detail.component';
import { EditItemComponent } from './items/components/edit-item/edit-item.component'; 
import { LoginComponent } from './auth/components/login/login.component';

const routes: Routes = [
  {path: "items", component: AllItemsComponent },
  {path: "items/:id", component: ItemsDetailComponent },
  {path: "items/edit/:id", component: EditItemComponent },
  {path: "login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
