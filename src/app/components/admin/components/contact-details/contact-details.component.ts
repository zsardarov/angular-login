import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {User} from "../../models/User";
import {map, Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-contact-details',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.css'
})
export class ContactDetailsComponent implements OnInit {
  user!: Observable<User>
  id!: number

  constructor(
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    // this.activatedRoute.params
    //   .subscribe((params) => this.id = params?.['id']);
    //
    // this.user = this.adminService.getContact(this.id);
    this.user = this.activatedRoute.data
      .pipe(
        map((data) => data?.['user'])
      )
  }
}
