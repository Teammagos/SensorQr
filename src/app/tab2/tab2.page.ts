import { Component } from '@angular/core';
import { DataLocalService } from '../services/data-local.service';
import { registro } from '../models/registro.models';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public datalocal:DataLocalService) {}

  abrirRegistro(Registro){
    console.log('Registo',Registro)
    this.datalocal.abirRegistro(Registro);
  }
}
