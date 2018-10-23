import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tarif-item',
  templateUrl: './tarif-item.component.html',
  styleUrls: ['./tarif-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TarifItemComponent {
  @Input()
  public item: Tarif;
}
