import { Component, Inject, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import {
  combineLatest,
  filter,
  map,
  of,
  startWith,
  switchMap,
  tap,
} from 'rxjs';
import { kvutsatTsiodModel, madorModel } from './model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'change-location-popup',
  templateUrl: './takash_change_location_popup.html',
  styleUrls: ['./takash_change_location_popup.scss'],
})
export class TakashChangeLocationPopup {
  @ViewChild('stepper') stepper!: MatStepper;

  readonly filters = new FormGroup({
    madorGroup: new FormGroup({
      filter: new FormControl(''),
      mador: new FormControl<madorModel | undefined>(undefined),
    }),
    kvutsatTsiodGroup: new FormGroup({
      filter: new FormControl(''),
      kvutsatTsiod: new FormControl<kvutsatTsiodModel | undefined>(undefined),
    }),
    yitra: new FormControl<number | undefined>(undefined),
    teken: new FormControl<number | undefined>(undefined),
    location: new FormControl<string | undefined>(undefined),
  });

  readonly madors$ = combineLatest([
    this.filters.controls.madorGroup.controls.filter.valueChanges.pipe(
      startWith('')
    ),
    of([
      new madorModel({ madorId: 1, madorDescription: 'מדור 1' }),
      new madorModel({ madorId: 2, madorDescription: 'מדור 2' }),
      new madorModel({ madorId: 3, madorDescription: 'מדור 3' }),
    ]),
  ]).pipe(
    map(([filter, madors]) =>
      madors!.filter(
        (mador) =>
          String(mador.madorId).includes(filter!) ||
          mador.madorDescription.includes(filter!)
      )
    )
  );

  readonly kvutsotTsiod$ = combineLatest([
    this.filters.controls.kvutsatTsiodGroup.controls.filter.valueChanges.pipe(
      startWith('')
    ),
    of([
      new kvutsatTsiodModel({
        kvutsatTsiodId: 1,
        kvutsatTsiodDescription: 'קבוצת ציוד 1',
      }),
      new kvutsatTsiodModel({
        kvutsatTsiodId: 2,
        kvutsatTsiodDescription: 'קבוצת ציוד 2',
      }),
      new kvutsatTsiodModel({
        kvutsatTsiodId: 3,
        kvutsatTsiodDescription: 'קבוצת ציוד 3',
      }),
    ]),
  ]).pipe(
    map(([filter, kvutsotTsiod]) =>
      kvutsotTsiod!.filter(
        (kvutsatTsiod) =>
          String(kvutsatTsiod.kvutsatTsiodId).includes(filter!) ||
          kvutsatTsiod.kvutsatTsiodDescription.includes(filter!)
      )
    )
  );

  // readonly isKliAndMachlakaSelected$ = combineLatest([
  //   this.filters.controls.kliGroup.controls.kli.valueChanges,
  //   this.filters.controls.machlakaGroup.controls.machlaka.valueChanges,
  // ]).pipe(map(([kli, machlaka]) => !!kli?.kodKli && !!machlaka?.machlakaId));

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public readonly data: {
      itemId: string;
      itemName: string;
      mador: madorModel;
      kvutsatTsiod: kvutsatTsiodModel;
      yitra: number;
      teken: number;
      location: string;
    }
  ) {}

  onAccept() {
    console.log('שינוי המיקום בוצע בהצלחה');
  }
}
