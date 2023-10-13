import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { concat } from 'rxjs';
import { DriverAppApiService } from '../../api/driver-app-api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  form1!: FormGroup;
  form2!: FormGroup;
  submitted: boolean | undefined;

  constructor (private formBuilder: FormBuilder , private api: DriverAppApiService) {
    this.form1 = this.formBuilder.group({
      Name: ['', Validators.required],
      Address: ['', Validators.required],
      Village: ['', Validators.required],
      District: ['', Validators.required],
      Pincode: ['', Validators.required],
      State: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      License_no: ['', Validators.required],
      Aadhaar_no: ['', [Validators.required,Validators.pattern("[0-9]{12}$")]],
      Mobile_number: ['', [
        Validators.required,
        Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")      ],
      ],
    });
    this.form2 = this.formBuilder.group({
      Password: ['', [Validators.required, Validators.minLength(2)]],
      Confirm_password: ['', [Validators.required, Validators.minLength(2)]],
    },
      {
        validators: this.password
      }
    );
  }
  ngOnInit () { }
  get pass (): any {
    return this.form2.get('Password');
  }
  get conPass (): any {
    return this.form2.get('Confirm_password');
  }
  passwordErrorMatcher = {
    isErrorState: (control: FormControl, form: FormGroupDirective | NgForm): boolean => {

      const invalidCtrl = !!(control && control.invalid && (control.touched));
      const invalidParent = !!(control && control.parent && control.touched && control.parent.invalid && control.parent.dirty && this.conPass.touched);
      return (invalidCtrl || invalidParent);
    }
  };
  confirmErrorMatcher = {
    isErrorState: (control: FormControl, form: FormGroupDirective | NgForm): boolean => {
      const invalidCtrl = !!(control && control.invalid && (control.touched));
      const invalidParent = !!(control && control.parent && control.touched && control.parent.invalid && control.parent.dirty && this.pass.touched);
      return (invalidCtrl || invalidParent);
    }
  };
  getErrorMessage (controlName: string) {
    if (this.form2.controls[controlName].hasError('minlength')) {
      return 'Must be at least 2 characters';
    }
    if (this.form2.controls[controlName].hasError('required')) {
      return 'You must enter a password';
    }
    return 'Passwords must match';
  }
  password (formGroup: any) {
    const { value: password } = formGroup.get('Password');
    const { value: Confirm_password } = formGroup.get('Confirm_password');

    return password === Confirm_password ? null : { mismatch: true };
  }
  onSubmit (): void {
    this.submitted = true;
    if (this.form1.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form1.value, null, 2));
    console.log(JSON.stringify(this.form2.value, null, 2));
  }
  saveForm () {

    let registerData =  {
      Name:this.form1.value.Name,
      Address:this.form1.value.Address,
      Village:this.form1.value.Village,
      District:this.form1.value. District,
      Pincode:this.form1.value.Pincode,
      State:this.form1.value.State,
      Mobile_number:this.form1.value. Mobile_number,
      Email:this.form1.value.Email,
      License_no:this.form1.value. License_no,
      Aadhaar_no:this.form1.value. Aadhaar_no,
      Password:this.form2.value.Password,
      Confirm_password:this.form2.value. Confirm_password,
    }
    console.log(registerData);
    this.form1.reset();
    this.form2.reset();
    // let data = this.form1.value;

    this.api.DriverRegister(registerData).subscribe((data) => {
      console.log(data);
  });
}
  get Mobile_number () {
    return this.form1.get('Mobile_number');
  }
  get Email () {
    return this.form1.get('Email');
  }
}
