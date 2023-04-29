import { Component } from '@angular/core';
import {FormGroup, FormControl,Validators,FormBuilder } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
form:any

  
constructor(private formBuilder:FormBuilder){
form:FormGroup
}
OnInit(){
  const idUnique=uuidv4();
this.form=this.formBuilder.group(
  {
    _id:idUnique,    
    video:['',Validators.required],
    name:['',Validators.required],
    categories:[[]]
  }
);
}

}
