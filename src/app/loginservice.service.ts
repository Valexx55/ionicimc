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
  private static readonly SERVICIO_POST_LOGIN: string = "http://10.1.2.10:8081/cfticionic/usuariocftic";

  constructor(private httpclient: HttpClient) { }
  postLogin(login: Login): Observable<Object> {
    let observable: Observable<Object>;
    
      let json_login: string = JSON.stringify(login);//Serializar
      console.log("Enviado..." + json_login);
      let cabeceras = new HttpHeaders().set('Content-type', 'application/json');

      observable = this.httpclient.post
      (LoginserviceService.SERVICIO_POST_LOGIN, 
        json_login, { headers: cabeceras, observe: "response" });
    return observable;
  }

}
