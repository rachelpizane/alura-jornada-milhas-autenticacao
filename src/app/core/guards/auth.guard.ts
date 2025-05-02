import { inject } from "@angular/core";
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";

export function authGuard(): boolean{
  const userService = inject(UserService);
  const router = inject(Router);

  if (!userService.estaLogado()) {
    router.navigate(['/login']);
    console.log('Usuário não está logado. Redirecionando para a página de login.');
    return false;
  }

  return true;
}
