import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TarifService } from '../services/tarif.service';
import { sort } from '../shared/tarif-sort';

@Component({
  selector: 'app-tarif-list',
  templateUrl: './tarif-list.component.html',
  styleUrls: ['./tarif-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TarifListComponent implements OnInit {
  public sortField: string;
  public ascending: boolean;
  public filters: SelectItem[] = [
    {
      label: 'Id',
      value: 'id',
    },
    {
      label: 'Name',
      value: 'name',
    },
    {
      label: 'Download speed',
      value: 'downloadSpeed',
    },
    {
      label: 'Upload speed',
      value: 'uploadSpeed',
    },
    {
      label: 'Price',
      value: 'price',
    }
  ];

  public items: Tarif[];

  constructor(private tarifService: TarifService) { }

  public changeSortField(value: string) {
    this.sortField = value;
    this.performSorting();
  }

  public changeDirection() {
    this.ascending = !this.ascending;
    this.performSorting();
  }

  public ngOnInit() {
    this.tarifService.getAll().subscribe((items: Tarif[]) => this.items = items);
    this.ascending = true;
    this.sortField = 'id';
  }

  public trackBy(index: number, item: Tarif): number {
    return item.id;
  }

  private performSorting() {
    this.items = this.items.sort((a: Tarif, b: Tarif) => sort(a, b, this.sortField, this.ascending));
  }
}
