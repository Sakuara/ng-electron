import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-electron';

  constructor(
    private electronService: ElectronService,
  ) {

  }

  openWindow() {
    this.electronService.shell.beep();
    this.electronService.shell.openExternal('http://baidu.com');
  }
}
