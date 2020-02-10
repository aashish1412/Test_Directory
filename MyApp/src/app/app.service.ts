import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams} from '@angular/common/http';
import {AppComponent} from './app.component';


@Injectable()
export class AppService {
  constructor(private httpClient: HttpClient) {
  }

  getComments(req): Observable<any> {
    return this.httpClient.get('http://localhost:5000/' + req);
  }

}


