import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrl: './sidenav-list.component.css'
})
export class SidenavListComponent {
   @Output() sidenavClose = new EventEmitter<void>();
  
    public onCloseSidenav() {
      this.sidenavClose.emit()
    }
}
