import { Injectable, PLATFORM_ID , Inject} from '@angular/core';
import { Observable , BehaviorSubject} from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthServService {
  private isloggedSubject: BehaviorSubject<boolean>;

  constructor(@Inject (PLATFORM_ID) private platformId: Object) {
    this.isloggedSubject = new BehaviorSubject<boolean> (this.isUserLogged)

  }

  login(userName: string, password: string)
  {
    if (isPlatformBrowser(this.platformId)) {
      // Call login API, and get Access Token
      let usrToken='123456789';
      localStorage.setItem("token", usrToken);
      this.isloggedSubject.next(true);
    }
  }
  
  logout()
  {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem("token");
      this.isloggedSubject.next(false);
    }
  }

  get isUserLogged(): boolean
  {
    if (isPlatformBrowser(this.platformId)) {
      return  (localStorage.getItem('token'))? true: false
    }
    return false;
  }

  getloggedStatus(): Observable<boolean>
  {
    return this.isloggedSubject.asObservable();
  }
}
