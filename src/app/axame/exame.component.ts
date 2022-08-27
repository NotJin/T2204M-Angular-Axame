import {Component} from "@angular/core";

@Component({
  selector: 'app-exame',
  templateUrl: './exame.component.html'
})

export class ExameComponent{
  show:boolean = false
  show1:boolean = false
  ngOnInit(){

  }
  show_Type(){
    this.show =! this.show
  }
  show_Type2(){
    this.show1 =! this.show1
  }
}
