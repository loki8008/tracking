import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DriverAppApiService {
get() {
  throw new Error('Method not implemented.');
}

constructor(private http: HttpClient) { }


httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

DriverLogin(body: any): Observable<any> {
  // console.log(body);
  return this.http.post<any>(`${environment.DriverLogin}`, body);
}
DriverRegister(body:any):Observable<any>{
    return this.http.post<any>(`${environment.DriverRegister}`, body);
}
ForgetPassword(body:any):Observable<any>{
  return this.http.put<any>(`${environment.ForgetPassword}`, body);
}
DriverPlan():Observable<any>{
  return this.http.get<any>(`${environment.DriverPlan}`);
}
Freightdetail():Observable<any>{
  return this.http.get<any>(`${environment.Freightdetail}`);
}
}
