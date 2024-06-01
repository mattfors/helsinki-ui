import { HelColDef, HelStepperDef } from '../../../../helsinki-ui/src';
import { ActivatedRouteSnapshot } from '@angular/router';

export const PICK_DATA: any[] = [
  {pickId: 0, orderId: 1, toteId: 1, aisleNumber: 3, bayNumber: 14, location: '03-14-06', productName: 'Sour Pickles', quantity: 1, status: 'Deposit'},
  {pickId: 1, orderId: 1, toteId: 1, aisleNumber: 5, bayNumber: 12, location: '05-11-01', productName: 'Bread', quantity: 2, status: 'Ready'},
  {pickId: 2, orderId: 2, toteId: 2, aisleNumber: 1, bayNumber: 1, location: '01-01-02', productName: 'Toilet Paper', quantity: 3, status: 'Ready'},
  {pickId: 3, orderId: 2, toteId: 2, aisleNumber: 1, bayNumber: 4, location: '01-04-11', productName: 'Dish Soap', quantity: 1, status: 'Ready'},
];

export const PICKS_COL_DEF: HelColDef[] = [
  { field: 'orderId', headerName: 'Order' },
  { field: 'toteId', headerName: 'Tote' },
  { field: 'aisleNumber', headerName: 'Aisle' },
  { field: 'bayNumber', headerName: 'Bay' },
  { field: 'location', headerName: 'Location' },
  { field: 'productName', headerName: 'Product' },
  { field: 'quantity', headerName: 'Quantity' },
  { field: 'status', headerName: 'Status' },
  { field: 'button' },
];

export const PICK_STEPPER_DEF: HelStepperDef = {
  steps: [
    {
      label: 'Order',
      headline: '%orderId%',
      content: 'Verify the order ticket.',
      next: 'Done'
    },
    {
      label: 'Tote',
      headline: '%toteId%',
      content: 'Verify the tote ticket.',
      next: 'Done'
    },
    {
      label: 'Location',
      headline: '%location%',
      content: 'Verify the location.',
      next: 'Done'
    },
    {
      label: 'Pick',
      headline: 'Pick %quantity% of %productName%',
      next: 'Done'
    }
  ]
};

export const STOCK_REPLENISHMENTS_DATA: any[] = [
  {replenishmentId: 0, aisleNumber: 3, bayNumber: 14, location: '03-14-06', productName: 'Sour Pickles', quantity: 10, status: 'Ready'},
  {replenishmentId: 1, aisleNumber: 5, bayNumber: 12, location: '05-11-01', productName: 'Bread', quantity: 15, status: 'Ready'},
];

export const STOCK_REPLENISHMENTS_COL_DEF: HelColDef[] = [
  { field: 'replenishmentId', headerName: 'Id' },
  { field: 'aisleNumber', headerName: 'Aisle' },
  { field: 'bayNumber', headerName: 'Bay' },
  { field: 'location', headerName: 'Location' },
  { field: 'productName', headerName: 'Product' },
  { field: 'quantity', headerName: 'Quantity' },
  { field: 'status', headerName: 'Status' },
];

export const STOCK_REPLENISHMENTS_STEPPER_DEF: HelStepperDef = {
  steps: [
    {
      label: 'Replenish',
      headline: 'Take %quantity% of %productName% to location %location% in aisle %aisleNumber%',
      next: 'Done'
    }
  ]
};


export function simpleDataResolver(name: string, data: any): (route: ActivatedRouteSnapshot) => undefined | any[] {
  return (route: ActivatedRouteSnapshot) => {
    const id = route.paramMap.get(name);
    if (id) {
      return data[+id];
    }
    return undefined;
  }

}
