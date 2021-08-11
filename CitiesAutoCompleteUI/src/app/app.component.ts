import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'citiesAutoCompleteUI';
  resArr = [];
  searchItem(e : any){
    console.log(e,"$$$$$$$$$$$");
    fetch(`https://localhost:44385/api/Cities/search?str=${e}`)
    .then(response => response.json())
    .then(data => {this.resArr = data;console.log(data)});


  }
}
