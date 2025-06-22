import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'maor-delete-popup',
  templateUrl: './maor_delete_popup.html',
  styleUrls: ['./maor_delete_popup.scss'],
})
export class MaorDeletePopup {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public readonly data: { maorRequestName: string; maorRequestId: number }
  ) {}

  onAccept() {}
}
