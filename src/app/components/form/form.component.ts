import { Component } from '@angular/core';
import {FormGroup, FormControl,Validators,FormBuilder } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { SelectItemGroup } from 'primeng/api';



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
form:any
  categories: Moviee[];
  selectedCategories: Moviee[];

  
constructor(private formBuilder:FormBuilder){
form:FormGroup
}
ngOnInit(){

  const idUnique=uuidv4();
this.form=this.formBuilder.group(
  {
    _id:idUnique,    
    video:['',Validators.required],
    name:['',Validators.required],
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

sendData(){
  console.log(this.form.value)
}
}
