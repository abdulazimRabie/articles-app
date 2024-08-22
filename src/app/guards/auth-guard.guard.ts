import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthServService } from '../services/auth-serv.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const authGuard = inject(AuthServService);

  if (authGuard.isUserLogged) {
    return true;
  } else {
    return false;
  }
};
