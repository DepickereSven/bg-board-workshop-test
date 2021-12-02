import { Component } from '@angular/core';
import { getAllGames } from '../fake-api';
import { formatRating } from '@bg-board/store/util-formatters';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'bg-board-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <bg-board-header
      [title]="title"
    ></bg-board-header>
    <div class="container">
      <div class="games-layout">
        <mat-card class="game-card" *ngFor="let game of games$ | async" [routerLink]="['/game', game.id]">
          <mat-card-header class="center-content">
            <mat-card-title>{{ game.name }}</mat-card-title>
          </mat-card-header>
          <img
            mat-card-image
            src="{{ game.image }}"
            alt="Photo of board game {{ game.name }}"
          />
          <mat-card-content>
            <p>
              {{ game.description }}
            </p>
            <span>
          <span style="font-weight: bold;">Rating:</span> {{ formatRating(game.rating) }}
        </span>
          </mat-card-content>
        </mat-card>
      </div>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  title = 'Board Game Hoard';
  formatRating = formatRating;
  games$ = this.http.get<any[]>('/api/games');
}
