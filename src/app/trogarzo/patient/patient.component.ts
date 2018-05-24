import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  panels = [false, false, false];
  constructor() { }

  ngOnInit() {}
  toggle(i):void{       console.log(this.panels[i]);
    this.panels[i] = !this.panels[i];
  }
}
