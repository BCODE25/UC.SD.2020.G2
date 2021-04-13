import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DiningHallsComponent } from './home-page/dining-halls/dining-halls.component';
import { QrCodesComponent } from './home-page/qr-codes/qr-codes.component';
import { WorkoutsComponent } from './home-page/workouts/workouts.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'dining', component: DiningHallsComponent},
  {path: 'qr', component: QrCodesComponent},
  {path: 'workout', component: WorkoutsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
