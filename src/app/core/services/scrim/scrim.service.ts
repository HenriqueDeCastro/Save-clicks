import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrimService {

  private visibleScrimSubject: BehaviorSubject<boolean>;

  constructor() {
    this.visibleScrimSubject = new BehaviorSubject<boolean>(false);
  }

  change(): void {
    this.visibleScrimSubject.next(!this.visibleScrimSubject.value);
  }

  status(): Observable<boolean> {
    return this.visibleScrimSubject.asObservable();
  }
}
