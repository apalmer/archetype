import { Combatant } from './combatant';
import { TurnTracker } from './turn-tracker';

describe('TurnTracker', () => {
  it('should create an instance', () => {
    var combatants = new Array<Combatant>();
    expect(new TurnTracker(combatants)).toBeTruthy();
  });
});
