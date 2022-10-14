import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private rest: HttpClient
  ) { }


obtenerPosts(): Observable<any>{
    return  this.rest.get('http://localhost:9000/empleado/obtener',{ headers: {
        'Access-Control-Allow-Origin': '*',
        //    'Access-Control-Allow-Origin' : 'https://bitoo-back.azurewebsites.net/',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
      }
    }).pipe( map ( res => {
      return res;
    }));
}

}
