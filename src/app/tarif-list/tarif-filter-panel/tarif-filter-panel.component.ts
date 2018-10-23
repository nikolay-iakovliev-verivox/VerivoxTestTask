import { Component, EventEmitter, Output, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tarif-filter-panel',
  templateUrl: './tarif-filter-panel.component.html',
  styleUrls: ['./tarif-filter-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TarifFilterPanelComponent {
  @Input()
  public value: string;
  @Input()
  public filters: SelectItem[];

  @Output()
  public changeSort = new EventEmitter<string>();
  @Output()
  public changeDirection = new EventEmitter<void>();

  public onSortChange(value: string) {
    this.changeSort.emit(value);
  }

  public onDirectionChange() {
    this.changeDirection.emit();
  }
}
