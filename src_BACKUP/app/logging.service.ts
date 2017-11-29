export class LoggingService {
    logStatus(serverDetails){
        console.log(serverDetails.name + " of Type " + serverDetails.type + " is now " + serverDetails.status);
    }
}