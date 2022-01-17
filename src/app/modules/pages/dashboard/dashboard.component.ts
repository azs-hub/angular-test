import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { IntentCreateComponent } from '../../../core/components/intent-create/intent-create.component'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
  	console.log(`Dialog open`);
    const dialogRef = this.dialog.open(IntentCreateComponent);

    dialogRef.afterClosed().subscribe(result => {
    	// eventually treat the data from th modal
    	// no eed in our case, ony close the modal
      dialogRef.close();
    });
  }

}
