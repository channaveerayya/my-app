import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootcamp',
  templateUrl: './bootcamp.component.html',
  styleUrls: ['./bootcamp.component.css']
})
export class BootcampComponent implements OnInit {

  topics: any = ['Angular', 'React', 'Vue'];
  constructor() { }

  ngOnInit() {
  }

}
