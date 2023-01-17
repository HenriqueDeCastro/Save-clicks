import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ScrimService } from '../scrim/scrim.service';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {

  private openDrawerSubject: BehaviorSubject<boolean>;

  constructor(private scrimService: ScrimService) {
    this.openDrawerSubject = new BehaviorSubject<boolean>(false);
  }

  change(): void {
    this.openDrawerSubject.next(!this.openDrawerSubject.value);
    this.scrimService.change();
  }

  status(): Observable<boolean> {
    return this.openDrawerSubject.asObservable();
  }
}
