import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule, ModalModule, PaginationModule, DatepickerModule, TabsModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AuthenticationService } from './authentication.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BsDropdownModule,
    ModalModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
