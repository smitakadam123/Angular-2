import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent implements OnInit {
imgs= [{'url': 'assets/one1.jpg'},
{'url': 'assets/one2.jpg'},
  {'url': 'assets/one3.jpg' }];
  constructor() { }

  ngOnInit() {
  }

}
