import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-option',
  templateUrl: './app-option.component.html',
  styleUrls: ['./app-option.component.css']
})
export class AppOptionComponent implements OnInit {
  name: string = '';
  searchStr =  "";
  constructor() { }

  @Input() resultsArr = []
  @Output() searchItemEvent = new EventEmitter<string>();

  ngOnInit(): void {}

  searchCity(){
    console.log(this.searchStr);
    if(!this.searchStr) return;
    this.addNewItem(this.searchStr);
    
 }
 addNewItem(value: string) {
  this.searchItemEvent.emit(value);
 }

 changeInput(item : string){
   this.searchStr = item;
 }


}
