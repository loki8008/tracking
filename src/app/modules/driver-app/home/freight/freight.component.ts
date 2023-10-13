import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { DialogBoxComponent } from 'src/app/shared/components/dialog-box/dialog-box.component';
import { DriverAppApiService } from 'src/app/shared/api/driver-app-api.service';
import { MatTableDataSource } from '@angular/material/table';

import 'leaflet.icon.glyph';
import { Map, latLng, tileLayer, Layer, marker, icon } from 'leaflet';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-control-geocoder';
import 'leaflet-routing-machine';
import { geocoder } from 'leaflet-control-geocoder/dist/control';
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';

export interface PeriodicElement {
  quantity: string;
  payment_terms: number;
  freight_estimation: string;
}

const ELEMENT_DATA:any = [
  {
    "payment_terms": "hosur",
    "quality": 1,
    "freight_estimation": 0
  }
];
@Component({
  selector: 'app-freight',
  templateUrl: './freight.component.html',
  styleUrls: ['./freight.component.scss'],
})
export class FreightComponent implements OnInit {
  displayedColumns: string[] = ['payment_terms', 'quantity', 'freight_estimation', 'action'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog, private api: DriverAppApiService) {}

  openDialog(action: any, obj: { action: any }) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event == 'Update') {
        this.updateRowData(result.data);
      }
    });
  }

  updateRowData(row_obj: { payment_terms: number; quantity: string; freight_estimation: string }) {
    this.dataSource = this.dataSource.filter(
      (value: { payment_terms: number; quantity: string; freight_estimation: string }, key: any) => {
        if (value.payment_terms == row_obj.payment_terms) {
          value.quantity = row_obj.quantity;
          value.freight_estimation = row_obj.freight_estimation;
        }
        return true;
      }
    );
  }

  ngOnInit() {
    this.api.Freightdetail().subscribe((res) => {
      console.log(res);
      this.dataSource = res.data;
    });
  }

  onMapReady(map: L.Map) {
    const waypoints = [L.latLng(12.7409, 77.8253), L.latLng(28.7041, 77.1025)];
    var routeControl = L.Routing.control({
      lineOptions: {
        extendToWaypoints: true,
        missingRouteTolerance: 0,
        styles: [
          {
            color: 'grey',
            opacity: 1,
            weight: 5,
          },
          // {
          //   color: 'red',
          //   opacity: 1,
          //   weight: 5,
          // },
          // {
          //   color: 'green',
          //   opacity: 1,
          //   weight: 5,
          // },
        ],
      },

      // router: L.Routing.osrmv1({
      //   serviceUrl: 'http://103.133.214.254:8989/route',
      //   profile:'driving',
      //   useHints: false,
        
      // }),

      router: new L.Routing.OSRMv1({
        serviceUrl: 'https://router.project-osrm.org/route/v1',
        profile: 'driving',
        useHints: false,
      }),
     

      plan: L.Routing.plan(waypoints, {
        createMarker(i, wp) {
          return L.marker(wp.latLng, {
            draggable: false,
            // icon: (L.icon as any).glyph({ glyph: String.fromCharCode(65 + i) }),
          })
            .bindPopup(
              '<img style="height:100%;width:100%" src="https://getbiz.app/img/getbizapp.png"></img>'
            )
            .openPopup();
        },
        geocoder: (L.Control as any).Geocoder.nominatim(),
        routeWhileDragging: false,
      }),
    }).addTo(map);

    // hiding the leaflet routing icon
    routeControl.hide();
    
    // routeControl.show();

    routeControl.on('routesfound', function (e) {
      var routes = e.routes;
      var summary = routes[0].summary;
      // alert time and distance in km and minutes
      console.log(summary);

      console.log(
        'Total distance is ' +
          summary.totalDistance / 1000 +
          ' km and total time is ' +
          Math.round(summary.totalTime / 60) +
          ' minutes'
      );
    });
  }
  options = {
    layers: [
      tileLayer('http://103.133.214.254/osm/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }),
    ],
    zoom: 7,
    center: latLng([46.879966, -121.726909]),
  };
}
