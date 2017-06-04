import { Component, OnInit } from '@angular/core';

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
  serverName = '';
  serverCreated = false;
  serversList = ['Server 1', 'Server 2'];


  onCreateServer(){
     this.serverLocation = 'The server is created at India, Pune and server name is ' + this.serverName;
     this.serverName = '';
     this.serversList.push(this.serverName);
     this.serverCreated = true;
  }

  onServerNameCreation(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  constructor() {
  }


  ngOnInit() {

  }

}
