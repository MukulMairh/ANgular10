import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.scss']
})
export class Assignment3Component implements OnInit {

  hidePara;
  constructor() { }

  ngOnInit(): void {
  }
  myArr: any = [];
  myFunc() {
    this.myArr.push(this.myArr.length);
  }


}
