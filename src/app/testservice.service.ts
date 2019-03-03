import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {
languages = 'http://localhost:3000/languages';
  constructor(private http: HttpClient) { }
  getlanguages() {
   return this.http.get(this.languages);
  }
}
