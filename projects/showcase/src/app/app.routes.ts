import { Routes } from '@angular/router';
import { HelRouteStepperComponent, HelRouteTableComponent } from '../../../helsinki-ui/src';
import {
  PICK_DATA,
  PICK_STEPPER_DEF,
  PICKS_COL_DEF,
  simpleDataResolver,
  STOCK_REPLENISHMENTS_COL_DEF, STOCK_REPLENISHMENTS_DATA, STOCK_REPLENISHMENTS_STEPPER_DEF
} from './+state/data';

export const routes: Routes = [
  {
    path: 'picks',
    component: HelRouteTableComponent,
    title: 'Pick',
    data: {
      colDefs: PICKS_COL_DEF,
      dataSource: PICK_DATA,
      routerLinkFunction: (data: any) => data['status'] === 'Ready' ? `${data['pickId']}` : undefined,
      showInMenu: true
    }
  },
  {
    path: 'picks/:pickId',
    component: HelRouteStepperComponent,
    data: {
      stepperDef: PICK_STEPPER_DEF,
      stepperCompleteCallback: (record: Record<string, any>) => {
        record['status'] = 'Deposit';
      }
    },
    resolve: {
      record: simpleDataResolver('pickId', PICK_DATA)
    }
  },
  {
    path: 'deposits',
    component: HelRouteTableComponent,
    title: 'Deposit',
    data: {
      colDefs: PICKS_COL_DEF,
      dataSource: PICK_DATA.filter(p => p['status'] === 'Deposit'),
      showInMenu: true
    }
  },
  {
    path: 'replenishments',
    component: HelRouteTableComponent,
    title: 'Replenish',
    data: {
      colDefs: STOCK_REPLENISHMENTS_COL_DEF,
      dataSource: STOCK_REPLENISHMENTS_DATA,
      routeField: 'replenishmentId',
      showInMenu: true
    }
  },
  {
    path: 'replenishments/:replenishmentId',
    component: HelRouteStepperComponent,
    data: {
      stepperDef: STOCK_REPLENISHMENTS_STEPPER_DEF,
      stepperCompleteCallback: (record: Record<string, any>) => {
        record['status'] = 'Complete';
      }
    },
    resolve: {
      record: simpleDataResolver('replenishmentId', STOCK_REPLENISHMENTS_DATA)
    }
  },
];
