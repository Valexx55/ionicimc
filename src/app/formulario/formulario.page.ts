import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { LoginserviceService } from '../loginservice.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
  providers:[LoginserviceService]
})
export class FormularioPage implements OnInit {

  login:Login;
  constructor(private loginservice:LoginserviceService) { 
    console.log("en constructor");
    this.login = new Login();//creo el objeto login
  }

  acceder (datos:Login)
  {
    console.log ("Ha tocado acceder");
    console.log ("nombre " + datos.nombre);
    console.log ("pwd " + datos.pwd);
    this.loginservice.postLogin(datos).subscribe(
      resp=> {
        let cuerpo: HttpResponse<Object>;
        cuerpo = resp as HttpResponse<Object>;
        console.log("Ha ido bien " + resp);
        console.log("Status " + cuerpo.status);
        console.log("Body " + cuerpo.body);

      },
      error=> {
        console.log ("Error " + error)
      }
    );
  }

  ngOnInit() {
    console.log("en init");
  }

}
