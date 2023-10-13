import { Component, OnInit } from '@angular/core';
import { DriverAppApiService } from 'src/app/shared/api/driver-app-api.service';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  id: string;
  start_Route: string;
  end_Route: string;
  date_time: string;
  quantity: string;
}

const ELEMENT_DATA:any = [
 
];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  displayedColumns: string[] = ['plan_FrieghtId',
  'start_Route',
  'end_Route',
  'date_time',
  'frieght_Quotation', 'status'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  constructor(private api: DriverAppApiService) {


  }
  ngOnInit(){
    this.api.DriverPlan().subscribe((res) => {
      console.log(res);
       this.dataSource.data=res;
        });


  }
}




