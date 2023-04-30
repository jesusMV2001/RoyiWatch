export class Pelicula {
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
