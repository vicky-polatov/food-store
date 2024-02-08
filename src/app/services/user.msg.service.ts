import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserMsg } from '../model/user-msg';

@Injectable({
  providedIn: 'root'
})
export class UserMsgService {
  private _userMsg$ = new BehaviorSubject<UserMsg | null>(null)
  public userMsg$ = this._userMsg$.asObservable()

  private timeOutId!: NodeJS.Timeout

  setUserMsg(userMsg: UserMsg, delay = 3000) {
    this._userMsg$.next(userMsg)

    if (this.timeOutId) clearTimeout(this.timeOutId)
    this.timeOutId = setTimeout(() => this._userMsg$.next(null), delay)
  }
}
