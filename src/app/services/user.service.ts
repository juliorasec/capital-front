import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {


  }

  getAllUsers(): Observable<any> {
    return this.http.get('http://localhost:3000/user');
  }

  getUser(userid: string): Observable<any> {
    return this.http.get(`http://localhost:3000/user?userid=${userid}`);
  }

  getOpportunities(userid: string): Observable<any> {
    return this.http.get(`http://localhost:3000/user/opportunities?userid=${userid}`);
  }

  updateOpportunities(userid: string, opportunities: any): Observable<any> {
    return this.http.put(`http://localhost:3000/user/opportunities?userid=${userid}`, { opportunities });
  }
}
