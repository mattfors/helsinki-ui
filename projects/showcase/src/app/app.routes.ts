import { Routes } from '@angular/router';
import { HelRouteStepperComponent, HelRouteTableComponent } from '../../../helsinki-ui/src';
import { PICK_DATA, PICK_STEPPER_DEF, PICKS_COL_DEF, simpleDataResolver } from './+state/data';

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
  }
];
