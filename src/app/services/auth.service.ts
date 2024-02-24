import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {Observable, of, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string|null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null
  }

  login(userInfo: {email: string|null|undefined, password: string|null|undefined}): Observable<boolean> {
    if (userInfo.email === 'admin@email.com'
        && userInfo.password === '1234') {
      this.setToken('gs431gsfgd545454');
      return of(true);
    }
    return throwError(() => Error('Failed login'))
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
