// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  baseURL:'https://localhost:44362/',

  // Driver App Login
  DriverLogin:'api/DriverLogin',
  // Driver App Register
 DriverRegister:'api/DriverRegister/register',
 //Driver ForgetPassword
 ForgetPassword:'api/ForgetPassword/api/AddReset',
//Driver Plan
DriverPlan:'http://localhost:3000/plan_freight_load',
//Freightdetail
Freightdetail:'',
Freightdetailadd:'api/Freightdetail/api/driverdetails'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
