import { Directive, Input, ElementRef, HostListener } from '@angular/core';

import { Sort } from '../utils/sort';
import { IEmployee } from '../utils/employee.model';

@Directive({
  selector: '[appSort]',
})
export class SortDirective {
  @Input('appSort') appSort: Array<IEmployee> = [];

  constructor(private element: ElementRef) {}

  @HostListener('click')
  sortTable() {
    const s = new Sort();

    // Get ref of current clicked elem
    const elem = this.element.nativeElement;

    // Get In WHich Order list should be sorted by default it should be set to desc on element attribute
    const order = elem.getAttribute('data-order');

    // Get The Property Name from Element Attribute
    const property = elem.getAttribute('data-name');

    // switch (order) {
    //   case '1':
    //     this.appSort = s.sortTable(
    //       this.appSort,
    //       property.toString().toLowerCase(),
    //       parseInt(order)
    //     );
    //     elem.setAttribute('data-order', '-1');
    //   case '-1':
    //     this.appSort = s.sortTable(
    //       this.appSort,
    //       property.toString().toLowerCase(),
    //       parseInt(order)
    //     );
    //     elem.setAttribute('data-order', '1');
    //   default:
    //     this.appSort = s.sortTable(
    //       this.appSort,
    //       property.toString().toLowerCase(),
    //       parseInt('-1')
    //     );
    //     elem.setAttribute('data-order', '-1');
    // }

    if (order === '1') {
      this.appSort = s.sortTable(
        this.appSort,
        property.toString().toLowerCase(),
        parseInt(order)
      );
      elem.setAttribute('data-order', '-1');
    } else {
      this.appSort = s.sortTable(
        this.appSort,
        property.toString().toLowerCase(),
        parseInt(order)
      );
      elem.setAttribute('data-order', '1');
    }
  }
}
