import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/model/pelicula';
import { PeliculasService } from 'src/app/services/peliculas.service';


@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {
  public products: Pelicula[];

  responsiveOptions: any[];

  constructor(private peliService: PeliculasService) {
  }

  ngOnInit() {
    
    this.peliService.findAll().subscribe(data => {
      console.log(data);
      this.products = data;
    });
    

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
 