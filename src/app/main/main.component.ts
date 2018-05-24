import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  private path2: string;
  private path1: string;
  states: Object ={patient: {active: 0, imgs: ["assets/imgs/main/Icon_Patient_Inactive.png", 'assets/imgs/main/Icon_Patient_Active.png']}, 
                hcp: {active: 0, imgs: ["assets/imgs/main/Icon_HCP_Inactive.png", 'assets/imgs/main/Icon_HCP_Active.png']},
                egrifta: {active: 0},
                trogarzo: {active: 0},
                continue: {active: 0, imgs: ["assets/imgs/main/Continue_inactive.png", "assets/imgs/main/Continue_active.png"]}
              }

  constructor(private router: Router, private translate: TranslateService, private dataService: DataService) { 
    translate.setDefaultLang('en');
  }

  setPath1(v:string): void{
    this.path1 = v;
    if(this.states['patient'].active || this.states['hcp'].active) {
      if(v=='trogarzo'){
        this.states[v].active = 1;
        this.states['egrifta'].active = 0;
      }else {
        this.states[v].active = 1;
        this.states['trogarzo'].active = 0;
      }
      this.states['continue'].active = 1;
    }
  }
  setPath2(v:string): void{
    this.path2 = v;
    this.dataService.setHcp(v=='hcp');
    if(v=='patient'){
      this.states[v].active = 1;     //console.log('anything',this.states[v].imgs[this.states[v].active])
      this.states['hcp'].active = 0;
    }else {
      this.states[v].active = 1;
      this.states['patient'].active = 0;
    }
  }

  navigate(): void{
    if(this.states['continue'].active)
          this.router.navigateByUrl(this.path1+"/"+this.path2);
  }

  ngOnInit() {
  }
}
