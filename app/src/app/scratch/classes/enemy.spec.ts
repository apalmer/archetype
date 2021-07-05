import { Enemy } from './enemy';
import { enemyData } from "./enemy-data";

describe('Enemy', () => {
  it('should create an instance', () => {
    expect(new Enemy('Young Silver Dragon')).toBeTruthy();
  });

  it('should load data based on constructor name parameter', () => {
    let enemy = new Enemy('Young Silver Dragon');
    expect(enemy.name).toBeTruthy();
  });

  it('should load actions', () => {
    let enemy = new Enemy('Young Silver Dragon');
    expect(enemy.actions.length > 0).toBeTrue();
  });

  it('should load first damage', () => {
    let enemy = new Enemy('Young Silver Dragon');
    expect(enemy.actions[1].damage[0]).toBeTruthy();
  });

  it('should load both damages', () => {
    let enemy = new Enemy('Adult Black Dragon');
    expect(enemy.actions[1].damage[0]).toBeTruthy();
    expect(enemy.actions[1].damage[1]).toBeTruthy();
  });

  it('should parse damage_immunities into enemy resistences', () => {
    let enemy = new Enemy('Wight');
    expect(enemy.resistances.find(r => r.type === "necrotic")).toBeTruthy();
    expect(enemy.resistances.find(r => r.type === "nonmagical")).toBeTruthy();
    expect(enemy.resistances.find(r => r.type === "nonsilver")).toBeTruthy();
  });


  it('should parse damage_resistances into enemy resistances', () => {

    let distinctResistances = new Set();

    enemyData.forEach(enemyData => {
      
      try {
        let enemy = new Enemy(enemyData.name);
        enemy.resistances.filter(r => r.value > .1).forEach(r => {
          distinctResistances.add(r.type);
        });
      }
      catch (e) {
        console.log(enemyData.name);
      }

    });

  });

  it('should parse damage_resistances into enemy', () => {
    let enemy = new Enemy('Sea Horse');
  });


});
