import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  counter = 0;
  interval;

  constructor() { }

  ngOnInit() {
  }

  onGameStart(){
    this.interval = setInterval(()=>{
      this.intervalFired.emit(this.counter +1);
      this.counter ++;
    },1000)
  }

  onGamePaused(){
    clearInterval(this.interval);
  }

  onGameStop(){
    clearInterval(this.interval);
    this.counter = 0;
  }


}
