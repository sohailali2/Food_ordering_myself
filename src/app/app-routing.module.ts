import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { BurgerDetailComponent } from './burger-detail/burger-detail.component';
import { SettingComponent } from './setting/setting.component';
import { DisplayComponent } from './display/display.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { HooksComponent } from './hooks/hooks.component';


const routes: Routes = [{
  path:"",
  component:HeaderComponent,
  children:[
  {
    path:"",
    component: HomeComponent
  },
  
  {
    path:"about",
    component: AboutComponent
  },
  {
    path:"help",
    component: HelpComponent
  },
  {
    path:"contact",
    component: ContactComponent
  },
  {
    path:"cart",
    component: CartComponent
  },
  {
    path:"burger/:id",
    component: BurgerDetailComponent
  },
  {
    path:"settings",
    component: SettingComponent
  },
  

  {
    path:"settings/:id",
    component: DisplayComponent
  },

  {
    path:"lifecycle",
    component: LifecycleComponent
  },
  {
    path:"hooks",
    component: HooksComponent
  },
  
  
  {
    path: '',
    redirectTo: '/about', 
    pathMatch: 'full' 
  },
  {
    path: '',
    redirectTo: '/cart', 
    pathMatch: 'full' 
  },
  {
    path: '',
    redirectTo: '/setting', 
    pathMatch: 'full' 
  },
  {
    path: '',
    redirectTo: '/help', 
    pathMatch: 'full' 
  },
 
]
},
{
  path: '404', 
  component: PageNotFoundComponent
},
{
  path: '**', 
  redirectTo : '404'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
