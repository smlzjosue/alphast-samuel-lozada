import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  phone: string;
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private httpClient: HttpClient) {}

  getUsersData() {
    return this.httpClient.get(
      `${environment.deployAssestPath}/assets/data/users.json`
    );
  }
}
