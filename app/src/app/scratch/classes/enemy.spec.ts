import { Enemy } from './enemy';

describe('Enemy', () => {
  it('should create an instance', () => {
    expect(new Enemy('Young Silver Dragon')).toBeTruthy();
  });

  it('should load data based on constructor name parameter',()=>{
    let enemy = new Enemy('Young Silver Dragon');
    expect(enemy.name).toBeTruthy();  
  });

  it('should load actions',()=>{
    let enemy = new Enemy('Young Silver Dragon');
    expect(enemy.actions.length > 0).toBeTrue();
  });

  it('should load first damage',()=>{
    let enemy = new Enemy('Young Silver Dragon');
    expect(enemy.actions[1].damage[0]).toBeTruthy();
  });

  it('should load both damages',()=>{
    let enemy = new Enemy('Adult Black Dragon');
    expect(enemy.actions[1].damage[0]).toBeTruthy();
    expect(enemy.actions[1].damage[1]).toBeTruthy();
  });
});
