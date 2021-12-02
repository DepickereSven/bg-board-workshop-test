import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { map } from "rxjs";

@Component({
  selector: 'bg-board-game-detail',
  template: `
    <mat-card>
      {{ gameId$ | async }}
    </mat-card>
  `,
  styleUrls: ['./game-detail.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class GameDetailComponent {
  constructor(private route: ActivatedRoute) {}

  gameId$ = this.route.paramMap.pipe(
    map((params: ParamMap) => params.get('id'))
  );
}
