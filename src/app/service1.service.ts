import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  message1:any;
  message2:any;
  focus1:any;
  focus2:any;
  route:any;
  profil:any;
  constructor(private httpClient:HttpClient) { }
  register(info:any){
    return this.httpClient.post('http://localhost/ecommerce-main-laravel/public/api/users',info);
  }
  profilConnecte(info:any){
    this.profil=info;
  }
  profile(){
    return this.httpClient.get('http://localhost/ecommerce-main-laravel/public/api/profile');
  }
  getLogin(infos:any){
    console.log(infos);
    return this.httpClient.post('http://localhost/ecommerce-main-laravel/public/api/login',infos);
  }
  dialog1(msg1:any,msg2:any,route:any){
    this.message1=msg1;
    this.message2=msg2;
    this.route=route;
  }
  focus(x:any){
    this.focus1=x;
    console.log(this.focus1);
  }
  isLoggedin(){
    return localStorage.getItem('sanctumToken')!=null;
  }

  getToken(){
    return localStorage.getItem('sanctumToken')||"";
  }

  getNom(){
    return localStorage.getItem('nom')||"";
  }

  getPrenom(){
    return localStorage.getItem('prenom')||"";
  }

  getTele(){
    return localStorage.getItem('telephone')||"";
  }

  getEmail(){
    return localStorage.getItem('email')||"";
  }

  getVille(){
    return localStorage.getItem('ville')||"";  
  }

  getProfile(){
    return localStorage.getItem('profil')||"";  
  }

  getDate(){
    return localStorage.getItem('date')||"";  
  }


  logOut(){
    return localStorage.clear();
  }
  
}
