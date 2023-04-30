import { Component } from '@angular/core';
import {FormGroup, FormControl,Validators,FormBuilder } from '@angular/forms';
import { Pelicula } from 'src/app/model/pelicula';
import { v4 as uuidv4 } from 'uuid';
import { ActivatedRoute,Router } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';


interface Moviee {
  name: string;
  code: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  pelicula: Pelicula;
  form:any;
  categories: Moviee[];
  selectedCategories: Moviee[];

    
  constructor(private formBuilder:FormBuilder,
              private route: ActivatedRoute, 
              private router: Router,
              private peliculaService: PeliculasService){
    form:FormGroup
  }
  
  ngOnInit(){
  this.form=this.formBuilder.group(
    {    
      video:['',],
      titulo:['',Validators.required],
      fecha:['',],
      categories:[[]]
    }
  );

  this.categories = [
    { name:'Adventures' , code: 'AV' },
    { name: 'Fantasy', code: 'FN' },
    { name: 'Action', code: 'AC' },
    { name: 'Rol', code: 'RL' },
    { name: 'Romantic', code: 'RM' },
    { name: 'Indies', code: 'ID' },
    { name: 'Superheroes', code: 'SH' },
    { name: '+18', code: '18' },
    { name: 'Sobrenatural', code: 'SB' },
    { name: 'Fear', code: 'FR' }
  ];


  }

  onSubmit(){
    this.pelicula = new Pelicula(this.form.value.titulo,this.form.value.fecha);
    console.log(this.pelicula);
    this.peliculaService.save(this.pelicula).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/']);
  }

}
