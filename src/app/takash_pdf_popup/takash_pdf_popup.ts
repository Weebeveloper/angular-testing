import { Component, ViewChild } from '@angular/core';
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
import { kodKliModel, machlakaModel } from './model';

@Component({
  selector: 'pdf-popup',
  templateUrl: './takash_pdf_popup.html',
  styleUrls: ['./takash_pdf_popup.scss'],
})
export class TakashPdfPopupComponnt {
  @ViewChild('stepper') stepper!: MatStepper;

  readonly filters = new FormGroup({
    kliGroup: new FormGroup({
      filter: new FormControl(''),
      kli: new FormControl(''),
    }),
    machlakaGroup: new FormGroup({
      filter: new FormControl(''),
      machlaka: new FormControl(''),
    }),
  });

  readonly kodKlis$ = combineLatest([
    this.filters.controls.kliGroup.controls.filter.valueChanges.pipe(
      startWith('')
    ),
    of([
      new kodKliModel({ kodKli: '1', kodKliDescription: 'כלי 1' }),
      new kodKliModel({ kodKli: '2', kodKliDescription: 'כלי 2' }),
      new kodKliModel({ kodKli: '3', kodKliDescription: 'כלי 3' }),
    ]),
  ]).pipe(
    map(([filter, kelim]) =>
      kelim!.filter(
        (kli) =>
          kli.kodKli.includes(filter!) ||
          kli.kodKliDescription.includes(filter!)
      )
    )
  );

  readonly machlakotData$ = combineLatest([
    this.filters.controls.kliGroup.controls.kli.valueChanges,
    of([
      new machlakaModel({
        machlakaId: '1',
        kodKli: '1',
        machlakaDescription: 'מחלקה 1',
      }),
      new machlakaModel({
        machlakaId: '2',
        kodKli: '1',
        machlakaDescription: 'מחלקה 2',
      }),
      new machlakaModel({
        machlakaId: '3',
        kodKli: '2',
        machlakaDescription: 'מחלקה 3',
      }),
    ]),
  ]).pipe(
    tap(() =>
      this.filters.controls.machlakaGroup.controls.machlaka.setValue('')
    ),
    map(([kodKli, machlakot]) =>
      machlakot!.filter((machlaka) => machlaka.kodKli === kodKli)
    )
  );

  readonly machlakot$ = combineLatest([
    this.filters.controls.machlakaGroup.controls.filter.valueChanges.pipe(
      startWith('')
    ),
    this.machlakotData$,
  ]).pipe(
    map(([filter, machlakot]) =>
      machlakot!.filter(
        (machlaka) =>
          machlaka.machlakaId.includes(filter!) ||
          machlaka.machlakaDescription.includes(filter!)
      )
    )
  );

  readonly kliAndMachlakaSelected$ = combineLatest([
    this.filters.controls.kliGroup.controls.kli.valueChanges,
    this.filters.controls.machlakaGroup.controls.machlaka.valueChanges,
  ]).pipe(map(([kli, machlaka]) => !!kli && !!machlaka));

  advanceStep() {
    this.stepper.next();
  }

  onEquipmentListClick() {
    console.log('print equipment list');
  }
}
