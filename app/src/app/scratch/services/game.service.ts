import { Injectable } from '@angular/core';
import { GameEngine } from '../classes/game-engine';


@Injectable({
  providedIn: 'root'
})
export class GameService {
  engine:GameEngine;

  constructor() {
    this.engine = new GameEngine();
  }
}
