import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [`
  .mat-sidenav-container {
    width: 100%;
    height: 100%;
  }
  mat-sidenav {
    width: 200px;
  }
  .app-content{
    margin: 20px 15px;
  }
  .container{
    height: 100vh;
    overflow: hidden;
  }
  `]

})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
