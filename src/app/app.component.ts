import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Master Chef\'s';
  currentView = 'Recipes';

  setCurrentView(selectedViewName: string) {
    this.currentView = selectedViewName;
  }
}
