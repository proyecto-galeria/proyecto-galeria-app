import { Component, OnInit } from '@angular/core';

import { Concept } from "../../shared/models/concept.model";

@Component({
  selector: 'concept-detail',
  templateUrl: './concept-detail.component.html',
  styleUrls: ['./concept-detail.component.css']
})
export class ConceptDetailComponent implements OnInit {

  public concept: Concept;

  constructor() { }

  ngOnInit() {
  }

}
