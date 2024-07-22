export class SidenavService {
    isExpanded = false;
  
    toggleSidenav() {
      this.isExpanded = !this.isExpanded;
    }
  
    expandSidenav() {
      this.isExpanded = true;
    }
  
    collapseSidenav() {
      this.isExpanded = false;
    }
  }