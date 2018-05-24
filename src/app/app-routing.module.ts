import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { MainComponent } from './main/main.component';
import { EgriftaComponent } from './egrifta/egrifta.component';
import { EpatientComponent } from './egrifta/epatient/epatient.component';
import { EhcpComponent } from './egrifta/ehcp/ehcp.component';
import { EformComponent } from './egrifta/eform/eform.component';
import { TrogarzoComponent } from './trogarzo/trogarzo.component';
import { PatientComponent } from './trogarzo/patient/patient.component';
import { HcpComponent } from './trogarzo/hcp/hcp.component';
import { TformComponent } from './trogarzo/tform/tform.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '', component: MainComponent, data: { title: 'Thera Support', description: "Main Page Description",keywords: "Thera support main page, thera hcp, trogarzo, egrifta" } },
  // { path: 'main', component: MainComponent, data: { title: 'Thera Support', description: "Main Page Description",keywords: "some, keywords, separated, by, a comma" }},
  { path: 'trogarzo', component: TrogarzoComponent, 
    children:[
      {path: '', redirectTo: 'patient', pathMatch: 'full'},
      {path: 'patient', component: PatientComponent, data: { title: 'Trogarzo Patients', description: "Trogarzo Patient Page ",keywords: "trogarzo patient" }},
      {path: 'hcp', component: HcpComponent, data: { title: 'Trogarzo HCP', description: "Trogarzo hcp Page ", keywords: "trogarzo hcp" }},
      {path: 'form', component: TformComponent, data: { title: 'Trogarzo Form', description: "Trogarzo register form Page ",keywords: "trogarzo form" }}
    ]
  },
  { path: 'egrifta', component: EgriftaComponent, 
    children: [
    {path: '', redirectTo: 'patient', pathMatch: 'full'},
    {path: 'patient', component: EpatientComponent, data: { title: 'Egrifta Patients', description: "Egrifta Patient Page ", keywords: "egrifta patient" }},
    {path: 'hcp', component: EhcpComponent, data: { title: 'Egrifta HCP', description: "Egifta HCP Page",keywords: "egrifta hcp" }},
    {path: 'form', component: EformComponent, data: { title: 'Egrifta Form', description: "Egrifta Register form ",keywords: "egrifta form" }}
  ]
 },
 { path: '**', component: NotfoundComponent, data: { title: 'Not Found Page | Thera Support', description: "Not Found Page",keywords: "thera, not found page" } }
 
]

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
