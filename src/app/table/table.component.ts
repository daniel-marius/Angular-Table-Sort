import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, withLatestFrom, startWith, tap } from 'rxjs/operators';

import { IEmployee } from '../utils/employee.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  dataEmployee$: Observable<Array<IEmployee>>;
  dataEmployeeFiltered$: Observable<Array<IEmployee>>;

  formGroup: FormGroup = new FormGroup({});

  constructor(private fromBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fromBuilder.group({ filter: [''] });

    this.dataEmployee$ = this.getEmployees();

    this.dataEmployeeFiltered$ = this.formGroup.get('filter').valueChanges.pipe(
      startWith(''),
      withLatestFrom(this.dataEmployee$),
      map(([val, dataEmployees$]) =>
        !val
          ? dataEmployees$
          : dataEmployees$.filter(
              (x) =>
                x.id.toString().includes(val) ||
                x.name.toLocaleLowerCase().includes(val) ||
                x.age.toString().includes(val) ||
                x.dob.includes(val)
            )
      )
    );
  }

  private getEmployees(): Observable<Array<IEmployee>> {
    return of([
      {
        id: 1,
        name: 'Mark Humpreys',
        age: 46,
        dob: '10/19/1975',
      },
      {
        id: 2,
        name: 'Katrina Campbell',
        age: 36,
        dob: '01/01/1985',
      },
      {
        id: 3,
        name: 'John Doe',
        age: 31,
        dob: '12/15/1990',
      },
      {
        id: 4,
        name: 'Steve Smith',
        age: 32,
        dob: '02/21/1989',
      },
      {
        id: 5,
        name: 'David Warner',
        age: 34,
        dob: '05/07/1987',
      },
      {
        id: 6,
        name: 'Marnus Labuschagne',
        age: 27,
        dob: '09/05/1994',
      },
    ]).pipe(tap());
  }
}
