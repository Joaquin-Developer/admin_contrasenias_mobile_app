import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from 'src/app/interfaces/interfaces';
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

  getMenuOptions() {
    // local file
    return this.http.get<Componente[]>("/assets/data/menu-options.json");
  }

  getAlbums() {
    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/albums");
  }

  getSuperheroes() {
    return this.http.get<Componente[]>("/assets/data/superheroes.json")
            .pipe(delay(1500))
  }

}
