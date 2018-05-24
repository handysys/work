import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  // styleUrls: ['./app.component.scss']
})
export class AppComponent {
  main: boolean;
  egrifta: boolean;
  hcp: boolean;
  trogarzo: boolean;
  form: boolean;


  constructor(private titleService: Title, private router: Router, private metaService: Meta) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {            // console.log(event.url);
        
        this.main = (event.url =="/main" || event.url== "/");   //css main
        this.egrifta = event.url.startsWith('/egrifta');
        this.trogarzo = event.url.startsWith('/trogarzo');       //css 
        this.hcp = event.url.endsWith('/hcp');                    //css hcp
        this.form = event.url.endsWith('/form');
        
        let root = this.router.routerState.snapshot.root;
        while (root) {   
          if (root.children && root.children.length) {
            root = root.children[0];
          } else if (root.data && root.data["title"]) {
            const pageTitle :string = root.data['title'];   
            this.main = this.main || pageTitle.startsWith('Not');     // set Not found page as main
            const pageDesc : string = root.data['description'];
            const pageKeywords : string = root.data['keywords'];
            this.titleService.setTitle(pageTitle + ' | Thera Support');
            this.metaService.addTag({ name: pageDesc, content: pageKeywords });
            return;
          } else {   console.log('error');
            return;
          }
        }
      }
    });
  }
}
