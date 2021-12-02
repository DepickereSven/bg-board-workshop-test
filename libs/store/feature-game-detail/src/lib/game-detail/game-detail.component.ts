import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { map, Observable, switchMap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { formatRating } from '@bg-board/store/util-formatters';
import { Game } from "@bg-board/api/util-interface";

@Component({
  selector: 'bg-board-game-detail',
  template: `
    <mat-card *ngIf="game$ | async as game">
      <mat-card-title>
        {{ game.name }}
      </mat-card-title>
      <mat-card-content class="content">
        <img
          class="game-image"
          src="{{ game.image }}"
          alt="Picture of board game {{ game.name }}"
        />
        <div class="details">
          <p>{{ game.description }}</p>
          <div class="sell-info">
        <span
        ><span style="font-weight: bold">Price:</span>
          {{ game.price | currency: 'USD' }}</span
        >
            <span>
          <span style="font-weight: bold">Rating:</span>
              {{ formatRating(game.rating) }}
        </span>
          </div>
          <div>
            <button mat-raised-button class="buy-button">BUY</button>
            <button mat-raised-button>SHARE</button>
          </div>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./game-detail.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class GameDetailComponent {
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  game$: Observable<Game> = this.route.paramMap.pipe(
    map((params: ParamMap) => params.get('id')),
    switchMap(id => this.http.get<Game>(`/api/games/${id}`))
  );

  formatRating = formatRating;
}
