import { Component, OnInit } from '@angular/core';
import {RatingModule} from 'ng2-rating';

@Component({
  selector: 'app-ratingbar',
  templateUrl: './ratingbar.component.html',
  styleUrls: ['./ratingbar.component.css']
})
export class RatingbarComponent implements OnInit {
 currentRate = 8;
  constructor() { }

  ngOnInit() {
  }

}
