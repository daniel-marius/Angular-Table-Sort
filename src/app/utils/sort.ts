export class Sort {
  constructor() {}

  public sortTable(
    data: any,
    sortKey: any,
    sortDirection: number,
    type: any
  ): any {
    const newData: any[] = this.sortArray(data, sortKey, sortDirection, type);
    return newData;
    // let newData: any[] = [...data];

    // sortDirection = sortDirection || 1;

    // return (a: any, b: any) => {
    //   if (type === 'date') {
    //     newData.sort(
    //       this.sortList(
    //         new Date(a[sortKey]),
    //         new Date(b[sortKey]),
    //         sortKey,
    //         sortDirection
    //       )
    //     );
    //   }

    //   newData.sort(
    //     this.sortList(a[sortKey], b[sortKey], sortKey, sortDirection)
    //   );

    //   return newData;
    // };
  }

  private sortArray(
    array: any,
    property: any,
    direction: number,
    type: any
  ): any {
    direction = direction || 1;
    array.sort(function compare(a: any, b: any) {
      let comparison: number = 0;

      if (type === 'date') {
        if (new Date(a[property]) > new Date(b[property])) {
          comparison = 1 * direction;
        } else if (new Date(a[property]) < new Date(b[property])) {
          comparison = -1 * direction;
        }
      } else {
        if (a[property] > b[property]) {
          comparison = 1 * direction;
        } else if (a[property] < b[property]) {
          comparison = -1 * direction;
        }
      }

      return comparison;
    });
    return array; // Chainable
  }

  private sortList(a: any, b: any, property: any, direction: number): any {
    let comparison: number = 0;
    if (a[property] > b[property]) {
      comparison = 1 * direction;
    } else if (a[property] < b[property]) {
      comparison = -1 * direction;
    }
    return comparison;
  }
}
