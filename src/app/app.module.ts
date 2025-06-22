import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TakashPdfPopupComponnt } from './takash_pdf_popup/takash_pdf_popup';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MaorApprovalChoicePopup } from './maor_awaiting_approval_choice_popup/maor_awaiting_approval_choice_popup';
import { MaorDeletePopup } from './maor_delete_popup/maor_delete_popup';
import { TakashChangeLocationPopup } from './takash_change_location/takash_change_location_popup';
import { MaorSplashScreenComponent } from './maor_splashscreen/maor-splashscreen';

@NgModule({
  declarations: [
    AppComponent,
    TakashPdfPopupComponnt,
    TakashChangeLocationPopup,
    MaorApprovalChoicePopup,
    MaorDeletePopup,
    MaorSplashScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatStepperModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
