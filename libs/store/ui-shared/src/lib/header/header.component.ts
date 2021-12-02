import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'bg-board-header',
  template: `
    <mat-toolbar color="primary">
      {{ title }}
    </mat-toolbar>
  `,
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  @Input() title = '';

}
