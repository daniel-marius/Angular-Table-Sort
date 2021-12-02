export class Sort {
  constructor() {}

  public sortTable(data: any, sortKey: any, sortDirection: number): any {
    if (sortDirection === 0) {
      return data.slice();
    }
    const newData: any[] = this.sortArray(data, sortKey, sortDirection);
    return newData;
  }

  private sortArray(array: any, property: any, direction: number): any {
    // direction = direction || 1;
    array.sort((a: any, b: any) => {
      let comparison: number = 0;

      switch (property) {
        case 'id':
          comparison = this.compareValues(a['id'], b['id'], direction);
          return comparison;
        case 'name':
          comparison = this.compareValues(a['name'], b['name'], direction);
          return comparison;
        case 'age':
          comparison = this.compareValues(a['age'], b['age'], direction);
          return comparison;
        case 'dob':
          comparison = this.compareValues(
            new Date(a['dob']),
            new Date(b['dob']),
            direction
          );
          return comparison;
        default:
          return 0;
      }

      // if (type === 'date') {
      //   if (new Date(a[property]) > new Date(b[property])) {
      //     comparison = 1 * direction;
      //   } else if (new Date(a[property]) < new Date(b[property])) {
      //     comparison = -1 * direction;
      //   }
      // } else {
      //   if (a[property] > b[property]) {
      //     comparison = 1 * direction;
      //   } else if (a[property] < b[property]) {
      //     comparison = -1 * direction;
      //   }
      // }

      // return comparison;
    });
    return array; // Chainable
  }

  private compareValues(a: any, b: any, direction: number): number {
    return a > b ? 1 * direction : -1 * direction;
  }
}
