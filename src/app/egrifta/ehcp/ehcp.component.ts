import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ehcp',
  templateUrl: './ehcp.component.html',
  styleUrls: ['./ehcp.component.scss']
})
export class EhcpComponent implements OnInit {
  panels = [false, false, false];
  constructor() { }

  ngOnInit() {}
  toggle(i):void{       console.log(this.panels[i]);
    this.panels[i] = !this.panels[i];
  }

}
