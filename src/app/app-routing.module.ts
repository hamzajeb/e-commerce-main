import { DialogComponent } from './dialog/dialog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { PhotosComponent } from './photos/photos.component';
import { PubliciteComponent } from './publicite/publicite.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';
import { ProfilComponent } from './profil/profil.component';


const routes: Routes = [
  {path:"home",component:PhotosComponent},
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"dialog",component:DialogComponent},
  {path:"profil",component:ProfilComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
