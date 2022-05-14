import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from './carousel/carousel.module';
import { AppComponent } from './app.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { MatButtonModule } from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { MatDividerModule} from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { MatPasswordStrengthModule } from "@angular-material-extensions/password-strength";
import {MatGridListModule} from '@angular/material/grid-list';
import { PhotosComponent } from './photos/photos.component';
import { PubliciteComponent } from './publicite/publicite.component';
import { FooterComponent } from './layout/footer/footer.component'
import { RouterModule ,Routes, CanActivate} from '@angular/router';
import { LoginComponent } from './login/login.component';
import {MatMenuModule} from '@angular/material/menu';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { DialogComponent } from './dialog/dialog.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { TestComponent } from './test/test.component';
import { ProfilComponent } from './profil/profil.component';




const appRoutes:Routes=[
   {path:'test',component:TestComponent,canActivate: [AuthGuard]},
  
]


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PhotosComponent,
    PubliciteComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    DialogComponent,
    TestComponent,
    ProfilComponent,






  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    MatSnackBarModule,
    MatGridListModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatBadgeModule,
    CarouselModule,
    RouterModule,
    MatDialogModule,
    MatDividerModule,
    MatRadioModule,
    MatSelectModule,
    AppRoutingModule,
    HttpClientModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    MatPasswordStrengthModule.forRoot()




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
