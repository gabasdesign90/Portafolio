import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { InfoPagina } from '../interfaces/InfoPagina.interface';
import { PortfolioInt } from '../interfaces/portafolio.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info : InfoPagina={};
  portfolio:PortfolioInt[]=[];
  cargado=false;
  constructor( private http:HttpClient) { 

    //console.log('Servicio infopagina cargado');
    this.CargarPageInfo();
    
  }

  private CargarPageInfo(){
    this.http.get('https://gabasdesign-b5b68-default-rtdb.firebaseio.com/pageInfo.json').subscribe(

      (resp:InfoPagina)=>{
        this.info=resp;
        this.cargado=true;
        console.log(resp);
      }); 
  }

  
}
