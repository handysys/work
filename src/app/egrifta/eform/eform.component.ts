import { Component, OnInit, ViewChild} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { FormService } from '../../form.service';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-eform',
  templateUrl: './eform.component.html',
  styleUrls: ['./eform.component.scss']
})
export class EformComponent implements OnInit {

  @ViewChild('requestForm') form: any;
  type : string = 'patient';
  hcp: boolean = false;
  info = 'egrifta';
  state: string="";

  constructor(private router: Router, private formService: FormService, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.hcp$.subscribe(hcp=>{     //console.log(hcp);
      if(hcp){
        this.type = 'hcp';
      }
      this.hcp = hcp;
    });
  }
  
  request():void{
    if (this.form.valid) {
      this.form.value.source = this.info;   
      this.form.value.formType = this.type;

      const formData: Object = {firstName: this.form.value['firstName'], lastName: this.form.value['lastName'], source: this.info, message: this.form.value['comments'],
      formType: this.type, email: this.form.value['email'], addressList: [{phone: this.form.value['telephone'], address1: this.form.value['address'], city: this.form.value['city'],
      zip: this.form.value['zip'], province: {name: this.state}, country: {code: 'USA'} }]};

      const data = JSON.stringify(formData); console.log(data);
      
      
      this.formService.SendForm(data).subscribe(
        result=>{         console.log(result); 
          return true;
        },
        error=>{        console.error( error['status'] );
          if(error['status'] ==200){
            document.getElementById('lightbox').style.display = 'block';
          }else{
            console.log("Error in sending form");
          }
          return false;
        }
      );
      
    }
  }
  

  cancelClick():void {
    this.form.reset();
  }

  closePopup():void{
    document.getElementById('lightbox').style.display = 'none';
  }

  backHome():void {
    this.router.navigateByUrl('/' + this.info + '/' + this.type);
  }
  selectedChange(value:string): void{          //console.log(value);
    this.type = value;
  }
  selectedState(v:string):void{            //console.log(v);
    this.state = v;
  }
}
