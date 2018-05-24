import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  @Input() egrifta: boolean;
  @Input() form: boolean;
  dropdown: boolean = false;
  toggleMenu: boolean = false;
  isLangEn: boolean = true; 
  
  menus = [{img: 'assets/imgs/head/Menu_Patient.png', text: 'For patient', url: 'patient'},
            {img: 'assets/imgs/head/Menu_hcp.png', text: 'For Health Care Providers', url: 'hcp'}];

  constructor(private router: Router, private translate: TranslateService, private dataService: DataService) { }
  
  ngOnInit() {                 
    this.translate.onLangChange.subscribe(() => {           
      if (this.translate.currentLang === 'en'){
        if(this.menus[0]['url'] == 'patient'){               //console.log(this.menus[0]['url'])
          this.menus[0]['text'] = 'For patient';
          this.menus[1]['text'] = 'For Health Care Providers';
        }else{
          this.menus[1]['text'] = 'For patient';
          this.menus[0]['text'] = 'For Health Care Providers';
        }
      }else{
        if(this.menus[0]['url'] == 'patient'){
          this.menus[0]['text'] = 'Para pacientes';
          this.menus[1]['text'] = 'Para proveedores de atención médica';
        }else{
          this.menus[1]['text'] = 'Para pacientes';
          this.menus[0]['text'] = 'Para proveedores de atención médica';
        }
      } 
      
    });        
    this.dataService.hcp$.subscribe(c=>{     //console.log(c);
      // if(c && this.menus[0]['url']!='hcp'){
      //   this.swapMenus();
      // }
      if(c){
        if(this.menus[0]['url']!='hcp')
          this.swapMenus();
      }else{
        if(this.menus[0]['url']!='patient')
          this.swapMenus();
      }
    });

  }
  openLink(dropdown: Number):void{   //console.log(this.dropdown)
    this.dropdown = !this.dropdown;     
    if(dropdown==1 && !this.form){     //console.log(this.egrifta)
      this.swapMenus();
    }
    if(this.egrifta)
        this.router.navigateByUrl('egrifta/'+this.menus[0].url);
    else this.router.navigateByUrl('trogarzo/' + this.menus[0].url);
    // if(this.form){
    //   this.dropdown = false;
    // }
    this.dataService.setHcp(this.menus[0].url=='hcp');
  }
  openForm():void{
    this.dropdown = false;
    if(this.egrifta)
        this.router.navigateByUrl('egrifta/form');
    else this.router.navigateByUrl('trogarzo/form');
  }
  mobileMenuClick(path): void{
    this.toggleMenu = false;
    if(this.egrifta)
        this.router.navigateByUrl('egrifta/'+path);
    else this.router.navigateByUrl('trogarzo/' + path);
  }
  setLanguage(lang: string):void{
    this.translate.use(lang);
    this.isLangEn = lang == "en"; 
  }
  private swapMenus(): void{
      let temp = this.menus[0];
      this.menus[0] = this.menus[1];
      this.menus[1] = temp;
  }
}
