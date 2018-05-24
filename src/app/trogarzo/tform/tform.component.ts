import { Component, OnInit, ViewChild} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { FormService } from '../../form.service';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-tform',
  templateUrl: './tform.component.html',
  styleUrls: ['./tform.component.scss']
})
export class TformComponent implements OnInit {
  @ViewChild('requestForm') form: any;
  type : string = 'patient';
  hcp: boolean = false;
  info = 'trogarzo';
  state: string="";
  //states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
  
  constructor(private router: Router, private formService: FormService, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.hcp$.subscribe(c=>{     //console.log(c);
      if(c){
        this.type='hcp';
      }
      this.hcp =c;
    });
  }

  request():void{
    if (this.form.valid) {
      this.form.value.source = this.info;   
      this.form.value.formType = this.type;
      //this.form.value.state = this.state;   
      // this.form.value.addressList = [{phone: this.form.value['telephone'], address1: this.form.value['address'], city: this.form.value['city'],
      //                         zip: this.form.value['zip'], province: {name: this.state}, country: {code: 'USA'} }];

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
      //this.form.reset();
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
