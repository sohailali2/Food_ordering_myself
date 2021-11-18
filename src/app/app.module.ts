import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import {AppSettingsService} from './app.service';
import { BurgerDetailComponent } from './burger-detail/burger-detail.component';
import { SettingComponent } from './setting/setting.component'
import { HttpClientModule } from '@angular/common/http';
import { DisplayComponent } from './display/display.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { DisplayHeaderComponent } from './display-header/display-header.component';
import { HooksComponent } from './hooks/hooks.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    HelpComponent,
    CartComponent,
    ContactComponent,
    BurgerDetailComponent,
    SettingComponent,
    DisplayComponent,
    PageNotFoundComponent,
    LifecycleComponent,
    DisplayHeaderComponent,
    HooksComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AppSettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
