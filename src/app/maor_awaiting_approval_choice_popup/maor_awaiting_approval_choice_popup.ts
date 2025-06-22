import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'maor-awaiting-approval-choice-popup',
  templateUrl: './maor_awaiting_approval_choice_popup.html',
  styleUrls: ['./maor_awaiting_approval_choice_popup.scss'],
})
export class MaorApprovalChoicePopup {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public readonly data: { deleteRequest: boolean; maorRequestId: number }
  ) {}

  onAccept() {}
}
