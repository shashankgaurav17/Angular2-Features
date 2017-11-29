import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Headers } from "@angular/http";
import { RequestOptions } from "@angular/http";

@Injectable()
export class FirebaseService{

    constructor(private http : Http) {}

    createServer(serverDetails:Object){
        return this.http.post('https://testcyware.firebaseio.com/data.json',serverDetails);
    }
    
    getServer(){
        let headers = new Headers();
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Content-Type', 'application/json') ;
        headers.append('charset','UTF-8');
        headers.append('Accept','application/json');
        let options = new RequestOptions({ headers: headers });

        return this.http.get('https://testcyware.firebaseio.com/data',options)
            .map(
                (response: Response) => {
                    const data = response.json();
                    for (const server of data) {
                      server.name = 'FETCHED_' + server.name;
                    }
                    return data;
                }
            )
            .catch(
                (error: Response) => {
                  return Observable.throw('Somethingwaaaa went wrong');
                }
            );
    }
}