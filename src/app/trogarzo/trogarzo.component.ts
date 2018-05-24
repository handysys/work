import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-trogarzo',
  templateUrl: './trogarzo.component.html',
  styleUrls: ['./trogarzo.component.scss']
})
export class TrogarzoComponent implements OnInit {

  constructor(private translate: TranslateService) { 
    translate.setDefaultLang('en');
  }

  ngOnInit() {
  }

}
