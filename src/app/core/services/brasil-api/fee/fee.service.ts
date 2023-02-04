import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IBrasilApiFee } from 'src/app/shared/classes/interfaces';


@Injectable({
  providedIn: 'root'
})
export class FeeService {
  private url_brasilapi: string;

  constructor(private http: HttpClient) {
    this.url_brasilapi = `${environment.url_brasilapi}/taxas/v1`;
  }

  getAll(): Observable<IBrasilApiFee[]> {
    return this.http.get<IBrasilApiFee[]>(this.url_brasilapi);
  }
}
