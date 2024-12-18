import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Dragonball, Dragon, DragonballSuper, Transformation } from '../interfaces/dragonball';

@Injectable({
  providedIn: 'root'
})
export class DragonballService {

  private apiUrl: string = 'https://dragonball-api.com/api' //url api Dragon ball

  constructor(
    private http: HttpClient // servicios httpclient de angular.
  ) { }

  seaechCharacterByAlphCodeTransfoServices(code: string): Observable<Transformation[]>{
    const url = `${this.apiUrl}/characters/${code}`;
    return this.http.get<DragonballSuper>(url)
    .pipe(
      map( response => response.transformations ),
      catchError( () => of([]) )
      )
  }

  seaechCharacterByAlphCodeServices(code: string): Observable<DragonballSuper | null>{
    const url = `${this.apiUrl}/characters/${code}`;
    return this.http.get<DragonballSuper>(url)
    .pipe(
      map( character => character ? character: null ),
      catchError( () => of(null) )
      )
  }

  searchCharacter(): Observable<Dragonball[]>{
    const url = `${this.apiUrl}/characters/?page=1&limit=58`
    return this.http.get<Dragon>(url)
    .pipe(
      map( response => response.items ),
      catchError( () => of([]))
    );
  }

  searchByNameServices(term: string): Observable<Dragonball[]>{
    const url = `${this.apiUrl}/characters?name=${term}`
    return this.http.get<Dragonball[]>(url)
    .pipe(
      catchError( () => of([]))
    )
  }

  searchByRaceServices( term: string ): Observable<Dragonball[]>{
    const url = `${this.apiUrl}/characters?race=${term}`
    return this.http.get<Dragonball[]>(url)
    .pipe(
      catchError( () => of([]))
    )
  }
}
