import { LoggingService } from './logging.service';
import { Injectable } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class ServerServices{

    constructor(private logService : LoggingService) {}

    serverDetails = [
        {name: "Man of Steel", type: "Green", id: 100},
        {name: "Batman v Superman", type: "Red", id: 200},
        {name: "Justice League", type: "Yellow", id : 300}
    ];    

    userDetails = [
        {name : "Vegita", id : 1},
        {name : 'Kakerott', id : 2},
        {name : 'Gogeta', id : 3},
        {name : 'Vegito', id : 4},
        {name : 'Trunks', id : 5},
        {name : 'Master Roshi', id : 6}
    ];

    loggingDetails(serverDetails){
        this.logService.logStatus(serverDetails);
    }

    getServer(id:number){
        const server = this.serverDetails.find(
            (s) => {
                return s.id == id;
            }
        )
        return server;
    }

    serverUpdate(serverName:any, serverType:any, serverID:any){        
        for(let x of this.serverDetails){
            if(x.id == serverID){
                x.name = serverName;
                x.type = serverType;
            }
        }
    }
}