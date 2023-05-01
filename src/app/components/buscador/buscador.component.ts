import { Component } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  spinner: boolean;
  items: any[];
  selectedItem: any;
  suggestions: any[];

  constructor(
    private router: Router,
    private peliService: PeliculasService
    ){
  }

  ngOnInit(){
    this.spinner=true;
  }

  clickEvent(){
    this.spinner = !this.spinner;
  }

  onSelect(event){
    this.peliService.findByTitulo(this.selectedItem).subscribe(data =>{
      
      this.router.navigate(['details/'+data.id]);
    });
  }

  search(event) {
    this.peliService.findAllByTitulo(event.query).subscribe(data => {
      this.suggestions = data;
    });
  }

}
