import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {adminGuard} from "./guards/admin.guard";
import {loginGuard} from "./guards/login.guard";

export const routes: Routes = [
    { path: 'login', canActivate: [loginGuard], component: LoginComponent} ,
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
      path: 'admin',
      canActivate: [adminGuard],
      loadChildren: () => import('./components/admin/admin.module')
        .then((m) => m.AdminModule)
    },
    { path: '**', component: NotFoundComponent }
];
