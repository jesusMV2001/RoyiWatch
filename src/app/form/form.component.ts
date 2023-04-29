import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
forms: any;

constructor(private formBuilder:FormBuilder,
  ){
  form:FormGroup;
}

ngOnInit(){
  // const idUnique = uuidv4();
  this.forms =  this.formBuilder.group({
    Image:[''],
    name:['',Validators.required],
    categories:[[]]
  }) 
}

}
