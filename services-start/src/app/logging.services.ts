export class loggingService{
  logStatusChange(status:string){
    console.log('Server status changed. New status is: ' + status);
  }
}
