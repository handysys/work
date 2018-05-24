import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  private hcp: Subject<boolean> = new BehaviorSubject<boolean>(false);
  hcp$ = this.hcp.asObservable();

  constructor() { }
  setHcp(data: boolean): void{
    this.hcp.next(data);
  }
}
