import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Record } from "../../shared/models/record.model";

@Component({
  selector: 'record-detail',
  templateUrl: './record-detail.component.html',
  styleUrls: ['./record-detail.component.css']
})
export class RecordDetailComponent implements OnInit {

  public record: Record;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    // obtener un record
    this.record = this.route.snapshot.data['record'] || {};
    
  }

}
