import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DriverAppApiService } from '../../api/driver-app-api.service';

@Component({
  selector: 'app- forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss'],
})
export class ForgetpasswordComponent implements OnInit {
  form1!: FormGroup;
  form2!: FormGroup;
  submitted: boolean | undefined;
  data:any;
  invalidLogin!: boolean;

  constructor(private formBuilder: FormBuilder, private api: DriverAppApiService, private router: Router) {
    this.form1 = this.formBuilder.group({
      Mobile_number: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    });
    this.form2 = this.formBuilder.group(
      {
        Password: ['', [Validators.required, Validators.minLength(2)]],
        Confirm_password: ['', [Validators.required, Validators.minLength(2)]],
      },
      {
        validators: this.password,
      }
    );
  }
  ngOnInit() {}
  get pass(): any {
    return this.form2.get('Password');
  }
  get conPass(): any {
    return this.form2.get('Confirm_password');
  }
  passwordErrorMatcher = {
    isErrorState: (control: FormControl, form: FormGroupDirective | NgForm): boolean => {
      const invalidCtrl = !!(control && control.invalid && control.touched);
      const invalidParent = !!(
        control &&
        control.parent &&
        control.touched &&
        control.parent.invalid &&
        control.parent.dirty &&
        this.conPass.touched
      );
      return invalidCtrl || invalidParent;
    },
  };
  confirmErrorMatcher = {
    isErrorState: (control: FormControl, form: FormGroupDirective | NgForm): boolean => {
      const invalidCtrl = !!(control && control.invalid && control.touched);
      const invalidParent = !!(
        control &&
        control.parent &&
        control.touched &&
        control.parent.invalid &&
        control.parent.dirty &&
        this.pass.touched
      );
      return invalidCtrl || invalidParent;
    },
  };
  getErrorMessage(controlName: string) {
    if (this.form2.controls[controlName].hasError('minlength')) {
      return 'Must be at least 2 characters';
    }
    if (this.form2.controls[controlName].hasError('required')) {
      return 'You must enter a password';
    }
    return 'Passwords must match';
  }
  password(formGroup: any) {
    const { value: Password } = formGroup.get('Password');
    const { value: Confirm_password } = formGroup.get('Confirm_password');

    return Password === Confirm_password ? null : { mismatch: true };
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.form1.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form1.value, null, 2));
    console.log(JSON.stringify(this.form2.value, null, 2));
  }
  saveForm() {
    let registerData = {
      Mobile_number: this.form1.value.Mobile_number,
      Password: this.form2.value.Password,
      Confirm_password: this.form2.value.Confirm_password,
    };
    console.log(registerData);
    this.api.ForgetPassword(registerData).subscribe((data) => {
      console.log(data);
  });
  }
  get Mobile_number() {
    return this.form1.get('Mobile_number');
  }
}
