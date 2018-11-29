import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {GeneralService} from '../../services/general.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  constructor(private generalClient: GeneralService) { 
    this.BuildForm();
  }
  public regisForm: FormGroup;

  ngOnInit() {
  }

  userRegis(){
    var obj = [];
    this.generalClient.sample(obj)
  .subscribe(
   data => {
     console.log(data)
  },
  error => {
      console.log(error);
  },
  );
  }

  BuildForm() {

    const DecimalPattern: any = '^(?:[0-9]+(?:\.[0-9]{0,2})?)?$';

    this.regisForm = new FormGroup({
      firstName: new FormControl({value: '', disabled: true}),
    });

  }

}
