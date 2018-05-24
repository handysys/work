import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hcp',
  templateUrl: './hcp.component.html',
  styleUrls: ['./hcp.component.scss']
})
export class HcpComponent implements OnInit {
  panels = [false, false, false];
  constructor() { }

  ngOnInit() {}
  toggle(i):void{       console.log(this.panels[i]);
    this.panels[i] = !this.panels[i];
  }
}
