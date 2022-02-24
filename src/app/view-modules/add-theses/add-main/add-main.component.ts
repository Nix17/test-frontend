import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-add-main',
  templateUrl: './add-main.component.html',
  styleUrls: ['./add-main.component.css']
})
export class AddMainComponent implements OnInit {

  isLinear = false;
  authorDataFG!: FormGroup;
  thesesDataFG!: FormGroup;

  // constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {

    this.authorDataFG = new FormGroup({
      lastNameCtrl: new FormControl('', Validators.required),
      firstNameCtrl: new FormControl('', Validators.required),
      middleNameCtrl: new FormControl('', Validators.required),
      emailCtrl: new FormControl('',[
        Validators.required,
        Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')
      ]),
      workPlaceCtrl: new FormControl('', Validators.required),

      anotherAuthersFullNameFG: new FormArray([])
    });

    this.thesesDataFG = new FormGroup({
      themeThesesCtrl: new FormControl('', Validators.required),
      contentThesesCtrl: new FormControl('', Validators.required),
    });

    // console.log(this.authorDataFG);
  }

  addAnotherAuther(): void {
    (<FormArray>this.authorDataFG.get('anotherAuthersFullNameFG')).push(
      new FormGroup({
        lastNameCtrl: new FormControl('', Validators.required),
        firstNameCtrl: new FormControl('', Validators.required),
        middleNameCtrl: new FormControl('', Validators.required),
      })
    );
    // console.log(this.authorDataFG.controls);
  }

  getFormsAnotherAuthers() {
    return (<FormArray>this.authorDataFG.get('anotherAuthersFullNameFG')) as FormArray;
  }

  removeAnotherAuther(i: number): void {
    (<FormArray>this.authorDataFG.get('anotherAuthersFullNameFG')).removeAt(i);
  }

  getDataFromForms(obj: any) {
    console.log(obj);
  }
}
