import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-form',
  templateUrl: './word-form.component.html',
  styleUrls: ['./word-form.component.css']
})
export class WordFormComponent implements OnInit {

	userWord = '';

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
  	console.log("submitted!");
  }

}
