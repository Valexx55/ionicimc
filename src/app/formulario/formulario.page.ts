import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { LoginserviceService } from '../loginservice.service';
import { HttpResponse } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
  providers:[LoginserviceService]
})
export class FormularioPage implements OnInit {

  login:Login;
  constructor(private loginservice:LoginserviceService, public nc : NavController) { 
    console.log("en constructor");
    this.login = new Login();//creo el objeto login
  }


  gestionRespuesta (loginval:Login)
  {
    console.log ("NOMBRE " + loginval.nombre);
    console.log ("PWD " + loginval.pwd);
    console.log ("TOKEN " + loginval.token);
    //TODO GUARDAR LAS CREDENCIALES
    let loginstr: string = JSON.stringify(loginval); 
    window.localStorage.setItem("credenciales",loginstr);
    //CAMBIAR DE PÁGINA a listapelis
    this.nc.navigateForward('listapelis');

  }

  acceder (datos:Login)
  {
    console.log ("Ha tocado acceder");
    console.log ("nombre " + datos.nombre);
    console.log ("pwd " + datos.pwd);
    this.loginservice.postLogin(datos).subscribe(
      resp=> {
        
        let cuerpo: HttpResponse<Object>;
        cuerpo = resp as HttpResponse<Object>;//CASTING!! CONVERSIÓN DE TIPOS EQUIVALENTE
        //cuerpo = <HttpResponse<Object>>resp;
        console.log("Ha ido bien " + resp);
        console.log("Status " + cuerpo.status);
        console.log("Body " + cuerpo.body);
        let loginval:Login = cuerpo.body as Login;
        this.gestionRespuesta(loginval);

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
