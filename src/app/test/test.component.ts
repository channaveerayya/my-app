import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
  public hasError = true;
  public suc = 'text-success';
  public msg = {
    'text-success' : !this.hasError,
    'text-danger' : this.hasError,
    'text-special': true
  }
  public greeting = '';
  ngOnInit() {
  }
onClick(event) {
  console.log(event);
  this.greeting = 'hello you clicked button';
}
templateRefVar(value) {
  console.log(value)
}
}
