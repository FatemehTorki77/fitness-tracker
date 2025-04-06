import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrl: './sidenav-list.component.css'
})
export class SidenavListComponent {
   @Output() sidenavClose = new EventEmitter<void>();
   isAuth :boolean = false;
   subscription!: Subscription;
 
  constructor(private authService: AuthService){}
  
  public onCloseSidenav() {
    this.sidenavClose.emit()
  }

  ngOnInit(): void {
    this.subscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    })
  }

  public onLogout() {
    this.onCloseSidenav()
    this.authService.logout()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
