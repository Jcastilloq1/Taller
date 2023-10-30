import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Series } from './series';

import { enviroment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private apiUtl = enviroment.baseUrl + 'series.json'

constructor(private http: HttpClient) { }

  getSeries(): Observable<Series[]> {
    return this.http.get<Series[]>(this.apiUtl)
  }

}
