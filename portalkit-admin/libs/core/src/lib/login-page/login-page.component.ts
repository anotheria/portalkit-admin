import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {catchError, EMPTY, Subject} from 'rxjs';
import { Router } from '@angular/router';
import {LoginService} from "./login-page-data/login.service";
import {LoginData} from "./login-page-data/login.types";

const DEFAULT_AUTHENTICATED_ROUTE = "/";

@Component({
  selector: 'pk-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit, OnDestroy {

  public formGroup!: FormGroup;
  public errorResponse: string | undefined | any = '';
  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly loginService: LoginService,
    private readonly router: Router) {}

  get login(): FormControl {
    return this.formGroup.get('login') as FormControl;
  }
  get password(): FormControl {
    return this.formGroup.get('password') as FormControl;
  }

  ngOnInit() {
    if(this.loginService.isAuthenticated()) {
      const route = DEFAULT_AUTHENTICATED_ROUTE;
      this.router.navigate([route]);
    }

    this.formGroup = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.required]),
    });
  }

  public onLoginFormSubmit() {
    if(this.formGroup.invalid) return;
    this.loginService
      .login(this.formGroup.value)
      .pipe(
        catchError((err) => {
          this.errorResponse = err;
          return EMPTY;
        })
      )
      .subscribe((response: LoginData) => {
        if(response.token){
          this.loginService.loginSuccess(response);

          const route =  DEFAULT_AUTHENTICATED_ROUTE;
          this.router.navigate([route]);
          //this.errorResponse = null;
        } else {
          //this.errorResponse = response.errorKey ?? response.message;
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
