import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  url:string[] = [
    'http://localhost:3000',
    'https://conf.antibiotic.ru/demo'
  ];

  getData(): Observable<any[]> {
    return this.http.get(this.url[0] + '/api/theses/all').pipe(
      map((data:any) => data)
    );
  }
}
