import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
    const router = inject(Router)
    if (localStorage.getItem('AccessToken')) {
    return true; // Allow navigation to the route
  } else {
    router.navigate(['/login'])
    return false; // Prevent navigation to the route
  }
};
