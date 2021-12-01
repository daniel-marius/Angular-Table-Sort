export class Sort {
  constructor() {}

  public sortTable(data: any, sortKey: any, sortDirection: number): any {
    const newData: any[] = this.sortArray(data, sortKey, sortDirection);
    return newData;
  }

  private sortArray(array: any, property: any, direction: number): any {
    direction = direction || 1;
    array.sort(function compare(a: any, b: any) {
      let comparison: number = 0;
      if (a[property] > b[property]) {
        comparison = 1 * direction;
      } else if (a[property] < b[property]) {
        comparison = -1 * direction;
      }
      return comparison;
    });
    return array; // Chainable
  }
}
