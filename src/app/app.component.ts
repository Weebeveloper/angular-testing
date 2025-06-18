import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TakashPdfPopupComponnt } from './takash_pdf_popup/takash_pdf_popup';
import { MaorApprovalChoicePopup } from './maor_awaiting_approval_choice_popup/maor_awaiting_approval_choice_popup';
import { MaorDeletePopup } from './maor_delete_popup/maor_delete_popup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private readonly _dialog: MatDialog) {}

  openTakashPDF() {
    this._dialog.open(TakashPdfPopupComponnt, {
      width: '50vw',
      height: '68vh',
    });
  }

  openMaorAwaitingApprovalChoicePopup(deleteRequest: boolean) {
    this._dialog.open(MaorApprovalChoicePopup, {
      width: '35vw',
      height: '50vh',
      data: {
        deleteRequest: deleteRequest,
        maorRequestId: 34567,
      },
    });
  }

  openDeleteMaorPopup() {
    this._dialog.open(MaorDeletePopup, {
      width: '35vw',
      height: '50vh',
      data: {
        maorRequestName: 'מקרופון לחדר חושך',
        maorRequestId: 34567,
      },
    });
  }
}
