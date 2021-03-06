import {Injectable, Inject} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class DataService {
    static get parameters(){
        return [[Http]];
    }

   constructor(@Inject(Http) private http: Http) {
      this.http = http;
   }

   getDepartments(location:string) {
      let path = "/api/public/listDepartments";
      return this.http.get(path);
   }
}