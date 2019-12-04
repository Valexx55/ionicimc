import { Component, OnInit } from '@angular/core';
import { TIMC } from '../timc.enum';
import { Imc } from '../imc';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.page.html',
  styleUrls: ['./imc.page.scss'],
})
export class ImcPage implements OnInit {

  private imc: Imc;
  private static readonly FOTO_DELGADO: string = "assets/delgado.jpg";
  private static readonly FOTO_DESNUTRIDO: string = "assets/desnutrido.jpg";
  private static readonly FOTO_IDEAL: string = "assets/ideal.jpg";
  private static readonly FOTO_SOBREPESO: string = "assets/sobrepeso.jpg";
  private static readonly FOTO_OBESO: string = "assets/obeso.png";

  constructor() {
    this.imc = new Imc();
  }

  ngOnInit() {
  }

  private obtenerImagen(tipoIMC: TIMC): string {
    let ruta_foto: string;

    switch (tipoIMC) {
      case TIMC.DELGADO: ruta_foto = ImcPage.FOTO_DELGADO; break;
      case TIMC.DESNUTRIDO: ruta_foto = ImcPage.FOTO_DESNUTRIDO; break;
      case TIMC.IDEAL: ruta_foto = ImcPage.FOTO_IDEAL; break;
      case TIMC.SOBREPESO: ruta_foto = ImcPage.FOTO_SOBREPESO; break;
      case TIMC.OBESO: ruta_foto = ImcPage.FOTO_OBESO; break;
    }

    return ruta_foto;
  }
  private obtenerIMCNominal(numimc: number): TIMC {
    let tipoIMC: TIMC;

    if (numimc < 16) {
      tipoIMC = TIMC.DESNUTRIDO;
    } else if (numimc >= 16 && numimc < 18) {
      tipoIMC = TIMC.DELGADO;
    } else if (numimc >= 18 && numimc < 25) {
      tipoIMC = TIMC.IDEAL;
    } else if (numimc >= 25 && numimc < 31) {
      tipoIMC = TIMC.SOBREPESO;
    } else {
      tipoIMC = TIMC.OBESO;
    }

    return tipoIMC;
  }
  calcularIMC() {
    let valornumimc = this.imc.peso / (this.imc.altura * this.imc.altura);
    this.imc.nominal = this.obtenerIMCNominal(valornumimc);
    this.imc.foto = this.obtenerImagen(this.imc.nominal);
    console.log(this.imc.nominal);
    console.log(this.imc.foto);

  }

}
