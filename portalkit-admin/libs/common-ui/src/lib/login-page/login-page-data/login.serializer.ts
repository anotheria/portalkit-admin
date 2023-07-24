import { Injectable } from '@angular/core';
import { LoginData, LoginDataDTO } from './login.types';

@Injectable({
  providedIn: 'root',
})
export class LoginSerializer {

  deserializeLoginData(dto: LoginDataDTO): LoginData {
    return {
      ...dto,
    };
  }
}
