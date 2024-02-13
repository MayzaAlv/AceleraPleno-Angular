import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ZIP } from 'src/app/interfaces/ZIP';
import { GetZIPService } from 'src/app/services/get-ZIP.service';

@Component({
  selector: 'app-get-zip',
  templateUrl: './get-ZIP.component.html',
  styleUrls: ['./get-ZIP.component.css']
})
export class GetZIPComponent {
  address: ZIP | undefined

  zip: string = ''
  error: string = ''
  
  constructor(private getZIPService: GetZIPService) {}

  onGetZIP() : void {
    this.getZIPService.getCep(this.zip).subscribe({
      next: (result: ZIP) => {
        this.address = result
        this.error = '';
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.error = 'ZIP not found.'
        } else {
          this.error = 'Failed to query the ZIP.'
        }
      }
    })
  }
}
