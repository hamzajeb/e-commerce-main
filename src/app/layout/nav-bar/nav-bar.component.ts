import { Component, OnInit } from '@angular/core';
import { Service1Service } from './../../service1.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { TestComponent} from './../../test/test.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  login:any;
  search: String = ""
  prenom:any;
  durationInSeconds = 5;
  constructor(private service1Service:Service1Service,private router: Router,private _snackBar: MatSnackBar) {
   }

  ngOnInit(): void {
  }

  testconnexion(){
    // this.service1Service.profile().subscribe(response=>{
    //   console.log(response);
    // });
    // if(this.service1Service.profil != undefined){
    // this.nom=this.service1Service.profil.prenom;
    // }
    this.prenom=this.service1Service.getPrenom();
    this.login=this.service1Service.isLoggedin();
    return this.login;//si connecter retourner true sinon false
  }

  Logout(){
    this.service1Service.logOut();
    this.router.navigate(['home']);
    this._snackBar.openFromComponent(TestComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

}
