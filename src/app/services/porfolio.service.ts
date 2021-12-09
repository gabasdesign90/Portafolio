import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PortfolioInt } from '../interfaces/portafolio.interface';

@Injectable({
  providedIn: 'root'
})



export class PorfolioService {

  portfolio:PortfolioInt[]=[];
  cargando=false;

  constructor(private http:HttpClient) { 
    this.CargarPortfolio();
  }

  private CargarPortfolio(){
    this.http.get('https://gabasdesign-b5b68-default-rtdb.firebaseio.com/portafolio.json')
    .subscribe( (res:any)=>{
        this.portfolio=res;
        console.log(res);
      }
    );
  }
}
