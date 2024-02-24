import {Component, OnInit} from '@angular/core';
import {ResolveEnd, ResolveStart, Router, RouterLink} from "@angular/router";
import {User} from "../../models/User";
import {filter, map, merge, Observable} from "rxjs";
import {AdminService} from "../../services/admin.service";
import {AsyncPipe} from "@angular/common";


@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent implements OnInit{
  contactList!: Observable<User[]>
  isLoading!: Observable<boolean>

  private showLoader!: Observable<boolean>
  private hideLoader!: Observable<boolean>

  constructor(
    private adminService: AdminService,
    private router: Router) {
  }
  ngOnInit() {
    this.contactList = this.adminService.getContactsList()

    this.hideLoader = this.router.events.pipe(
      filter((e) => e instanceof ResolveEnd),
      map(() => false)
    );
    this.showLoader = this.router.events.pipe(
      filter((e) => e instanceof ResolveStart),
      map(() => true)
    );

    this.isLoading = merge(this.hideLoader, this.showLoader)
  }
}
