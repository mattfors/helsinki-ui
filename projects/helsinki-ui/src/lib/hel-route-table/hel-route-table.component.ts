import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CdkCell, CdkCellDef, CdkColumnDef, CdkHeaderCell, CdkHeaderCellDef } from '@angular/cdk/table';
import { HelColDef, HelTableComponent } from '../hel-table/hel-table.component';

@Component({
  selector: 'hel-table-cell-button',
  standalone: true,
  imports: [RouterLink, NgIf],
  template: '<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" *ngIf="_showButton" [routerLink]="_routerLink">Start</button>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelTableCellButtonComponent {

  @Input() data: any = {};
  _showButton = false;
  _routerLink = '';

  @Input()
  set config(config: {routerLinkFunction: (data: any) => string|undefined}) {
    const routerLink = config.routerLinkFunction(this.data);
    this._showButton = routerLink !== undefined;
    if (routerLink) {
      this._routerLink = routerLink;
    }
  }

}

@Component({
  selector: 'hel-hel-route-table',
  standalone: true,
  imports: [CommonModule, HelTableComponent, CdkCell, CdkCellDef, CdkHeaderCell, CdkColumnDef, CdkHeaderCellDef, RouterLink],
  templateUrl: './hel-route-table.component.html',
  styleUrl: './hel-route-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelRouteTableComponent {
  dataSource: any[];
  colDefs: HelColDef[];


  constructor(private route: ActivatedRoute) {
    const routeField = route.snapshot.data['routeField'];
    let routerLinkFunction = route.snapshot.data['routerLinkFunction'];
    if (!routerLinkFunction && routeField) {
      routerLinkFunction = (data: any) => `${data[routeField]}`;
    }
    this.colDefs = route.snapshot.data['colDefs'];
    this.dataSource = route.snapshot.data['dataSource'];
    if (routeField || routerLinkFunction) {
      this.colDefs = [
        ...this.colDefs,
        {
          field: 'routerButton',
          renderer: {
            component: HelTableCellButtonComponent,
            config: {
              routerLinkFunction
            }
          }
        }
      ];
    }

  }
}
