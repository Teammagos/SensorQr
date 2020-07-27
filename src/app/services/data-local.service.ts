import { Injectable } from '@angular/core';
import { registro } from '../models/registro.models';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  guardardatos:registro[]=[];
  constructor(private navCtrl:NavController,private inappbrowser:InAppBrowser,private storage:Storage) {
    this.cargarStorage();
   }
  
  async cargarStorage(){
    this.guardardatos=await this.storage.get("registros") || [];
  }
  
  async guardarRegistro(format:string,text:string){
    await this.cargarStorage();
    const nuevoRegistro=  new registro(format,text);
    this.guardardatos.unshift(nuevoRegistro);
    this.storage.set('registro',this.guardardatos)
    this.abirRegistro(nuevoRegistro);
  }
  abirRegistro(Registro:registro){
    this.navCtrl.navigateForward("/tabs/tab2");
    switch(Registro.type){
      case 'http':  
        this.inappbrowser.create(Registro.text,'_system')
      break;
      case 'geo':
      break;
    }
  }
}
