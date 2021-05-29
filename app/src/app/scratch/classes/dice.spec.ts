import { isproficient, Skill } from './dice';
import { Player } from './player';

describe('dice', () => {
  it('should handle type checks with as', () => {
    let player = new Player();
    player.proficiencies = {
        skills:[],
        weapon:[],
        weapontype:[],
        saves:[],
        armor:[]
    };
    player.proficiencies.skills = ["athletics"];
    let thing = "athletics";
    expect(isproficient(player,thing)).toBeTrue();
  });
  it('should fail type checks with as', () => {
    let player = new Player();
    player.proficiencies = {
        skills:[],
        weapon:[],
        weapontype:[],
        saves:[],
        armor:[]
    };
    player.proficiencies.skills = ["athletics"];
    let thing = "athltics";
    let actual:boolean = isproficient(player,thing);
    expect(actual).toBeTrue();
  });
});
