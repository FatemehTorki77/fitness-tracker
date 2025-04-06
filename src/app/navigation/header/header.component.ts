import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit , OnDestroy{
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth :boolean = false;
  subscription!: Subscription;

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.subscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    })
  }

  public onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  public onLogout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
