import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminDashboardComponent} from "./components/admin-dashboard/admin-dashboard.component";
import {ContactsComponent} from "./components/contacts/contacts.component";
import {ContactDetailsComponent} from "./components/contact-details/contact-details.component";
import {HomeComponent} from "./components/home/home.component";
import {userResolver} from "./resolvers/user.resolver";

const routes: Routes = [
  {
    path: '', component: AdminDashboardComponent,
    children: [
      {path: 'contacts', component: ContactsComponent},
      {
        path: 'contacts/:id',
        component: ContactDetailsComponent,
        resolve: {
          user: userResolver
        }
      },
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
