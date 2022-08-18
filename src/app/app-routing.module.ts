import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignInComponent} from "./signIn/sign-in.component";
import {SignInGuard} from "./sign-in.guard";

const routes: Routes = [
  {path: '',
    redirectTo: '/sign-in',
    pathMatch: 'full'},
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: "main",
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
    canActivate: [SignInGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
