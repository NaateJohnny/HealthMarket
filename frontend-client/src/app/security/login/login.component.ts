import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { LoginService } from './login.service';
import { NotificationService } from 'app/shared/messages/notification.service';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('loginAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translateX(-50px)'}),
        animate('400ms 0s ease-in-out')
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {

  loginState = 'ready'

  loginForm: FormGroup
  navigateTo: string

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private notificationService: NotificationService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required])
    })
    this.navigateTo = this.activatedRoute.snapshot.params['to'] || btoa('/')
  }

  login() {
    this.loginService.login(this.loginForm.value.email,
                            this.loginForm.value.password)
                     .subscribe(user =>
                                  this.notificationService.notify(`Bem vindo, ${user.name}`),
                                response =>
                                  this.notificationService.notify(response.error.message),
                                () => {
                                  this.router.navigate([atob(this.navigateTo)])
                                })
  }

}
