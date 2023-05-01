export class Pelicula {
  public id: string;
  public titulo: String;
  public fecha: String;

  constructor(tit: String,fe: String){
    this.fecha = fe;
    this.titulo=tit;
  }

}
