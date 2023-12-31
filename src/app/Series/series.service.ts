import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Series } from './series';

import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private apiUtl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getSeries(): Observable<Series[]> {
    return this.http.get<Series[]>(this.apiUtl)
  }

}
