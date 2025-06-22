import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TakashPdfPopupComponnt } from './takash_pdf_popup/takash_pdf_popup';
import { MaorApprovalChoicePopup } from './maor_awaiting_approval_choice_popup/maor_awaiting_approval_choice_popup';
import { MaorDeletePopup } from './maor_delete_popup/maor_delete_popup';
import { TakashChangeLocationPopup } from './takash_change_location/takash_change_location_popup';
import { MaorSplashScreenComponent } from './maor_splashscreen/maor-splashscreen';
import { delay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private readonly _dialog: MatDialog) {}

  showMaorSplashscreen = false;

  openTakashPDF() {
    this._dialog.open(TakashPdfPopupComponnt, {
      width: '50vw',
      height: '68vh',
    });
  }

  openTakashChangeLocation() {
    this._dialog.open(TakashChangeLocationPopup, {
      width: '50vw',
      height: '68vh',
      data: {
        itemId: '00-00-0000-0',
        itemName: 'בורג ממש ממש מגניב',
        mador: { madorId: 230, madorDescription: 'מדור חדש' },
        kvutsatTsiod: { kvutsatTsiodId: 0, kvutsatTsiodDescription: 'צ' },
        yitra: 2,
        teken: 223,
        location: 'ממוקם במחסן חדש מס 445',
      },
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

  async openMaorSplashscreen() {
    this.showMaorSplashscreen = true;
    setTimeout(() => {
      this.showMaorSplashscreen = false;
    }, 5000);
  }
}
