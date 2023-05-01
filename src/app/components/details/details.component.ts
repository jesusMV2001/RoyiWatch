import { Component,OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { Pelicula } from 'src/app/model/pelicula';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public idPelicula: Number;
  public pelicula: Pelicula;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private peliService: PeliculasService
  ){
    this.pelicula=new Pelicula("aa","aa");
  }

  ngOnInit(){
    this.route.params.subscribe((params: Params) =>{
      this.idPelicula = params["id"];
    });

    this.peliService.findById(this.idPelicula).subscribe(data => {
      this.pelicula = data;
    });
  }

}
