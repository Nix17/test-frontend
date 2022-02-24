import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {
    return this.http.get('https://conf.antibiotic.ru/demo/api/theses/all').pipe(
      map((data:any) => data)
    );
  }
}
