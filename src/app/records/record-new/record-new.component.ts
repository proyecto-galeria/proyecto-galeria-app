import { Component, OnInit } from '@angular/core';
import { Instruction } from '../../shared/models/instruction.model';

import {Observable, Subject} from 'rxjs';


import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';


import { ActivatedRoute } from "@angular/router";
import { ConceptsService } from '../../concepts/concepts.service';
import { LocationsService } from '../../locations/locations.service';
import { RecordsService } from '../../records/records.service';
import { Record } from '../../shared/models/record.model'

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
  public instruction: Instruction;
  public records: Array<Record>;
  
  public webcamImage: WebcamImage = null;
  

  private trigger: Subject<void> = new Subject<void>();

  public uploadedImage: any;


  constructor(
    private route: ActivatedRoute,
    private conceptsService: ConceptsService,
    private locationsService: LocationsService,
    private recordsService: RecordsService,
  ) {
    this.currentState = RECORD_STATES.RECORD_INFO;
  }

  ngOnInit() {

    
    this.instruction = this.route.snapshot.data['instruction'] || {};
    
    this.conceptsService.fetchConcept(this.instruction.concept)
    .subscribe( concept => {
      this.locationsService.fetchLocation(concept.location).subscribe(
        location => {
          concept.location_object = location;
          this.instruction.concept_object = concept 
        }
      )
    });
  }

  changeState( state: number ) {
    this.currentState = state;
  }

  finishForm() {
    // Cachar datos y crea new Record
    // FRENK
    let newReco: Record = {
      id: 123,
      user: {
        id: 1234,
        first_name: 'Rorri',
        last_name: 'Frnk',
        email: 'a@gmail.com',
        username: 'furenku',
        role: {
          id: 12345,
          name: 'rol',
          capabilities: ['asd']
        }
      },
      date: '2045-12-12',
      name: 'nombre falso',
      comments: 'HOOOOUdajskdaskdjashd',
      instruction: this.instruction,
      photo: 'asd',
      sent: false,
      recipients: ['a', 'b']
    }
    
    // 
    // Hacer la llamada al servicio
    console.log(newReco)
    this.recordsService.addRecord(newReco)
      // .subscribe(newReco => {
      // });
      
      // this.records.push(newReco)
    this.currentState = RECORD_STATES.CREATE_PHOTO;
  }


  public triggerSnapshot(): void {
    this.trigger.next();
  }


  public handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
    this.uploadedImage = webcamImage.imageAsDataUrl;
  }



  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }


}
