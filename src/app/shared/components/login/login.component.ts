import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DriverAppApiService } from '../../api/driver-app-api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  invalidLogin!: boolean;
  constructor(private formBuilder: FormBuilder, private api: DriverAppApiService, private router: Router) {}
  ngOnInit() {
    this.form = this.formBuilder.group({
      Password: ['', [Validators.required, Validators.minLength(2)]],
      Mobile_number: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    });
  }

  saveForm() {
    // console.log(this.form.value);

    let data = this.form.value;
    this.form.reset();

    this.api.DriverLogin(data).subscribe(
      (res) => {
         console.log(data);
        console.log(res);

        const token = <any>res.token;
        localStorage.setItem('jwt', token);

        this.invalidLogin = false;
        this.router.navigateByUrl('/home');
      },
      (error) => {
        this.invalidLogin = true;
      }
    );
  }
}
