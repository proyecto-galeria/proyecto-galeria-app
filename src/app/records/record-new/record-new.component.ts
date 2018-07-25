import { Component, OnInit } from '@angular/core';


enum RECORD_STATES {
  RECORD_INFO = 0,
  CREATE_PHOTO = 1,
  REVIEW_PHOTO = 2,
  REVIEW_RECORD = 3,
  CHOOSE_RECIPIENTS = 4,
  ADD_EMAILS = 5,
  CONFIRM_SEND = 6,
}


@Component({
  selector: 'record-new',
  templateUrl: './record-new.component.html',
  styleUrls: ['./record-new.component.css']
})
export class RecordNewComponent implements OnInit {

  public currentState;

  constructor() {
    this.currentState = RECORD_STATES.RECORD_INFO;
  }

  ngOnInit() {
  }

  changeState( state: number ) {
    this.currentState = state;
  }

  finishForm() {
    this.currentState = RECORD_STATES.CREATE_PHOTO;
  }

}
