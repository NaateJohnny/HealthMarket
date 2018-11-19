import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { trigger, state, style, transition, animate } from '@angular/animations';

import { LoginService } from '../login/login.service';
import { NotificationService } from 'app/shared/messages/notification.service';
import { User } from '../login/user.model';

@Component({
  selector: 'mt-create-login',
  templateUrl: './create-login.component.html',
  styleUrls: ['./create-login.component.css'],
  animations: [
    trigger('loginAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translateX(50px)'}),
        animate('400ms 0s ease-in-out')
      ])
    ])
  ]
})
export class CreateLoginComponent implements OnInit {

  loginState = 'ready'

  createLoginForm: FormGroup
  navigateTo: string
  userId: User

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private notificationService: NotificationService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.createLoginForm = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required])
    })
    this.navigateTo = this.activatedRoute.snapshot.params['to'] || btoa('/')
  }

  createLogin(user: User) {
    this.loginService.createLogin(user)
      .do((userId: User) => {
        this.userId = userId
      })
      .subscribe((userId: User) => {
        this.router.navigate([atob(this.navigateTo)])
      })
  }

}
