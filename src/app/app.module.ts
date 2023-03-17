import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from './services/auth-service.service';
import { AuthGuard } from './services/auth-guard.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { ProductRegistrationComponent } from './components/product-registration/product-registration.component';
import { FaqComponent } from './components/faq/faq.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UsernamePipe } from './Pipes/username.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    HomeComponent,
    ProductRegistrationComponent,
    FaqComponent,
    UsernamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    FormsModule
    ],
  providers: [AuthGuard, AuthService, UsernamePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
