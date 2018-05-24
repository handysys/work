import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-egrifta',
  templateUrl: './egrifta.component.html',
  styleUrls: ['./egrifta.component.scss']
})
export class EgriftaComponent implements OnInit {

  constructor(private translate: TranslateService) { 
    translate.setDefaultLang('en');
  }

  ngOnInit() {
  }

}
