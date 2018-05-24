import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html'
  // styleUrls: ['./foot.component.scss']
})
export class FootComponent implements OnInit {
  @Input() egrifta: boolean;
  @Input() trogarzo: boolean;

  constructor() { }

  ngOnInit() {}

}
