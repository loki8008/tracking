import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class OpenDialogsService {
  constructor(public dialog: MatDialog) {}

  openDialog(fileName: any, width: any, height: any): void {
    const dialogRef = this.dialog.open(fileName, {
      width: width,
      height: height,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'success') {
        // console.log("success");
      } else {
        // console.log("not success");
      }
    });
  }
}
