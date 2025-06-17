import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TakashPdfPopupComponnt } from './takash_pdf_popup/takash_pdf_popup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private readonly _dialog: MatDialog) {}

  openPDF() {
    this._dialog.open(TakashPdfPopupComponnt, {
      width: '50vw',
      height: '68vh',
    });
  }
}
