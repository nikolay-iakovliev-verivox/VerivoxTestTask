import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { tarifMockData } from '../shared/mocks';

@Injectable({
  providedIn: 'root'
})
export class TarifService {
  public getAll(): Observable<Tarif[]> {
    return of(tarifMockData);
  }
}
