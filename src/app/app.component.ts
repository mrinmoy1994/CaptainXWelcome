import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
  //  window.scrollTo(0,0);
  }

  title = 'WepApplication';
  onActivate(event) {
    window.scroll(0,0);
}
  
}
