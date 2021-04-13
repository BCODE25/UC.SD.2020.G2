import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DiningHallsComponent } from './home-page/dining-halls/dining-halls.component';
import { WorkoutsComponent } from './home-page/workouts/workouts.component';
import { QrCodesComponent } from './home-page/qr-codes/qr-codes.component';
import { LoginPageServiceService } from './login-page/login-page-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    DiningHallsComponent,
    WorkoutsComponent,
    QrCodesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LoginPageServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
