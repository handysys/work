import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-epatient',
  templateUrl: './epatient.component.html',
  styleUrls: ['./epatient.component.scss']
})
export class EpatientComponent implements OnInit {
  panels = [false, false, false];
  patienttopdesc: string;
  constructor() { }

  ngOnInit() { }
  toggle(i):void{       console.log(this.panels[i]);
    this.panels[i] = !this.panels[i];
  }
  
}
