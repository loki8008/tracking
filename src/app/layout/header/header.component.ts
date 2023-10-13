import { Component } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
  constructor(private location: Location){}
  title = 'driverApp';
  language: string[] = [
    'telugu',
    'english',
    'tamil',
    'abui',
    'abaza',
  ]
goBack() {
  this.location.back();
}

}
