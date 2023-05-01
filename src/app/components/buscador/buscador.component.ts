import { Component } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  value: string;
  spinner: boolean;
  items: any[];
  selectedItem: any;
  suggestions: any[];

  constructor(){
  }

  ngOnInit(){
    this.spinner=true;
  }

  clickEvent(){
    this.spinner = !this.spinner;
  }

  search(event) {
    this.suggestions = [...Array(10).keys()].map(item => event.query + '-' + item);
  }

}
