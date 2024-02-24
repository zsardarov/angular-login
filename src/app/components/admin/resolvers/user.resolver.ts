import {ResolveFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AdminService} from "../services/admin.service";
import {User} from "../models/User";
import {catchError, delay, EMPTY} from "rxjs";

export const userResolver: ResolveFn<User> = (route, state) => {
  const router = inject(Router);
  const adminService = inject(AdminService);
  return adminService.getContact(route.params?.['id']).pipe(
    delay(1000),
    catchError(() => {
      router.navigate(['admin/contacts']);
      return EMPTY;
    })
  );
};
