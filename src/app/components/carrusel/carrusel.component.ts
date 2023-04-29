import { Component } from '@angular/core';



@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent {
  public products: any[];

  responsiveOptions: any[];

  constructor() {
    let p = new producto();
    this.products = [];
    this.products.push(p);
    this.products.push(p);
    this.products.push(p);
  }

  ngOnInit() {
    

      this.responsiveOptions = [
          {
              breakpoint: '1199px',
              numVisible: 1,
              numScroll: 1
          },
          {
              breakpoint: '991px',
              numVisible: 2,
              numScroll: 1
          },
          {
              breakpoint: '767px',
              numVisible: 1,
              numScroll: 1
          }
      ];
  }
}

class producto{
  private _titulo: String;
  private _fecha: String;

  constructor(){
    this._titulo = "qaaaa";
    this._fecha = "12/01/2023"
  }

  //GETTER Y SETTER
  public get titulo(){
    return this._titulo
  }

  public set titulo(tit: String){
    this._titulo = tit;
  }

  public get fecha(){
    return this._fecha
  }

  public set fecha(fec: String){
    this._fecha = fec;
  }
  
}