import {Component} from '@angular/core';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online{
      color: white;
    }
  
  `]
})
export class ServerComponent{
  serverStatus = 'offline';
  serverId = 10;

  constructor(){
      this.serverStatus = Math.random() > 0.5 ? 'offline' : 'online';
  }

  getServerStatus(){
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'online' ? '#5cb85c' : '#d9534f';
  }

}
