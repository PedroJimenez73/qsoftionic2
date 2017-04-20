import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Proves } from "../../providers/proves";
 
@Component({
  selector: 'page-editprove',
  templateUrl: 'editprove.html'
})
export class EditProvePage {
 
  prove: any;
  _id: any;
  nombre: any;
  servicio: any;
  cif: any;
  direccion: any;
  telefono: any;
  persona: any;
  mail: any;
  pago: any;
  nc: any;
  eval: any;
  fechamodif: any;

  constructor(public nav: NavController, public proveService: Proves, public navParams: NavParams, public viewCtrl: ViewController) {
     this.prove = navParams.get('prove');
    

  }

  
  

 
  save(): void {
 
    let prove = {
      id: this.prove._id,
      nombre: this.nombre,
      servicio: this.servicio,
      cif: this.cif,
      direccion: this.direccion,
      telefono: this.telefono,
      persona: this.persona,
      mail: this.mail,
      pago: this.pago,
      nc: this.nc,
      eval: this.eval,
      fechamodif: this.fechamodif
    };
  
    this.proveService.updateProve(prove);

    this.viewCtrl.dismiss();
    
 
  }

  close(): void {
    this.viewCtrl.dismiss();
  }

  


 

}