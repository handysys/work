import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { TrogarzoComponent } from './trogarzo/trogarzo.component';
import { EgriftaComponent } from './egrifta/egrifta.component';
import { PatientComponent } from './trogarzo/patient/patient.component';
import { HcpComponent } from './trogarzo/hcp/hcp.component';
import { TformComponent } from './trogarzo/tform/tform.component';
import { EpatientComponent } from './egrifta/epatient/epatient.component';
import { EhcpComponent } from './egrifta/ehcp/ehcp.component';
import { EformComponent } from './egrifta/eform/eform.component';
import { MainComponent } from './main/main.component';
import { HeadComponent } from './head/head.component';
import { FootComponent } from './foot/foot.component';
import { NotfoundComponent } from './notfound/notfound.component';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { DataService } from './data.service';
import { FormService } from './form.service';

@NgModule({
  declarations: [
    AppComponent, 
    MainComponent,
    HeadComponent,
    FootComponent,
    TrogarzoComponent,
    EgriftaComponent,
    PatientComponent,
    HcpComponent,
    TformComponent,
    EpatientComponent,
    EhcpComponent,
    EformComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [DataService, FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
