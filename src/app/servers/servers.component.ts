import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverId = 10;
  serverStatus = "offline";
  allowAddNewServer = false;
  serverLocation= 'The server is not present!';
  serverName = 'X-MAN Server';

  constructor() {
     setTimeout(() => {
        this.allowAddNewServer = true;
     }, 2000)
  }

  onCreateServer(){
     this.serverLocation = 'The server is created at India, Pune and server name is ' + this.serverName;
  }

  onServerNameCreation(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {

  }

}
