import { Component, OnInit } from '@angular/core';
import { User } from "../user";

@Component({
  selector: 'app-bootcamp',
  templateUrl: './bootcamp.component.html',
  styleUrls: ['./bootcamp.component.css']
})
export class BootcampComponent implements OnInit {

  topics: any = ['Angular', 'React', 'Vue'];
  userModel = new User('channu', 'channu@gmail.com', '9988776655', '', 'morning', true);
  constructor() { }

  ngOnInit() {
  }

}
