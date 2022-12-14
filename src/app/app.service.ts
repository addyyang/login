import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  URL = 'localhost:8080'

  sendEmail(email) {
    return this.http.post(this.URL + '/songs/setEmail/'+email, {});
  }

  getEmail() {
    return this.http.get(this.URL + '/songs/getEmail');
  }
}
