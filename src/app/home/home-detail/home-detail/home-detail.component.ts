import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {
  @Input() public homes;
  @Output() public saveclicked=new EventEmitter();
  constructor() {
    
   }

  ngOnInit() {
    
  }
  public onclick()
    {
      this.saveclicked.emit();
      console.log("emit an event");
      
    }

}
