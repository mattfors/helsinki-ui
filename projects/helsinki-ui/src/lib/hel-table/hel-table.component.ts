import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableDataSourceInput, CdkTableModule } from '@angular/cdk/table';
import { RouterLink } from '@angular/router';

export interface HelColDef {
  field: string;
  headerName?: string;
  renderer?: {
    component: any;
    config?: any;
  };
}
@Component({
  selector: 'hel-table',
  standalone: true,
  imports: [CommonModule, CdkTableModule, RouterLink],
  templateUrl: './hel-table.component.html',
  styleUrl: './hel-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelTableComponent<T> {

  _colDefs: HelColDef[] = [];
  _cdkHeaderRowDef: string[] = []

  @Input()
  dataSource: CdkTableDataSourceInput<T> = [];

  @Input()
  set colDefs(colDefs: HelColDef[]) {
    this._colDefs = colDefs;
    this._cdkHeaderRowDef = colDefs.map(d => d.field);
  }

}

