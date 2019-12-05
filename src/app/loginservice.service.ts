import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from './login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
//DESDE AQUÍ NOS COMUNICAMOS CON EL SERVIDOR
//tx rx datos 
constructor (private httpclient : HttpClient)
{

}

postLogin (login: Login):Observable<Object>
{

   let dir_serv : string = "http://10.1.2.10:8081/cfticionic/usuariocftic ";
   let str_login : string =  JSON.stringify(login);//Serializar
   console.log ("Enviado..." +str_login);
   let headers = new HttpHeaders().set ('Content-type', 'application/json');

   return this.httpclient.post 
    (dir_serv, str_login,{headers:headers, observe:"response"});
}

}
