import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Record } from "../../shared/models/record.model";

@Component({
  selector: 'record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {

  public records: Record[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    // obtener listado de records
    this.records = this.route.snapshot.data['records'] || {};
    
  }

}
