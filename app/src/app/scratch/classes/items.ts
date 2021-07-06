import { Player } from "./player";
import { getMod } from "./dice";
export class Items {
    flair:string;
    name:string;
    magic:number;
    cost:number;
    rarity:string;
    weight:number;
    description:string;
    type:Array<string>;
    attunereq:boolean;
    equippable:boolean;
    equipped:boolean;
    attuned:boolean;
    eqslot:string;
    usable:boolean;
    consumable:boolean;
    quantity: number;
    infusion: any;
    icon:string;
    iconmake(strin){
        return 'url("assets/images/'+strin+'")'
    }
    useffect(player?){};
    eqeffect(player?){};
    uneqeffect(player?){};
    constructor(){
        this.type=[]
        this.name='unknown item'
        this.consumable=false
        this.attunereq=false
        this.equipped=false
        this.attuned=false
        this.quantity=1
        this.icon=this.iconmake("defitem.png")

    }

}

export var blows={name:'blowsixal'}

export var armo1= new Items
armo1.flair='EnArmor'
armo1.name='Half Plate'
armo1.description='Custom armor created by SciMagic prototype'
armo1.cost=750
armo1.equippable=true
armo1.eqslot='armor'
armo1.weight=40
armo1.usable=false
armo1.magic=2
armo1.attunereq=false
armo1.icon=armo1.iconmake('enarm.jpg')
armo1.eqeffect=function(player:Player){
    let aMod=Math.min(getMod(player, "DEX"), 2)
    let magicbonus=0
    if (armo1.magic&& (armo1.attunereq===false||(armo1.attunereq===true &&armo1.attuned===true)))
    {magicbonus=armo1.magic}
    player.armorClass=15+aMod+magicbonus
}
armo1.uneqeffect=function(player:Player){
player.armorClass=10
}

var baxe=new Items
baxe.name='Berserker Axe'
baxe.description= ` Fake item You gain a +1 bonus to attack and damage rolls made with this magic weapon. In addition, while you are attuned to this weapon, your hit point maximum increases by 1 for each level you have attained.",
"***Curse.*** This axe is cursed, and becoming attuned to it extends the curse to you. As long as you remain cursed, you are unwilling to part with the axe, keeping it within reach at all times. You also have disadvantage on attack rolls with weapons other than this one, unless no foe is within 60 feet of you that you can see or hear.",
"Whenever a hostile creature damages you while the axe is in your possession, you must succeed on a DC 15 Wisdom saving throw or go berserk. While berserk, you must use your action each round to attack the creature nearest to you with the axe. If you can make extra attacks as part of the Attack action, you use those extra attacks, moving to attack the next nearest creature after you fell your current target. If you have multiple possible targets, you attack one at random. You are berserk until you start your turn with no creatures within 60 feet of you that you can see or hear."
`
baxe.type.push('weapon')
baxe.equippable=true
baxe.attunereq=true
baxe.icon=baxe.iconmake('gaxe.jpg')

var bootl=new Items
bootl.name='Boots of Levitation'
bootl.attunereq=true
bootl.magic=0
bootl.description= "While you wear these boots, you can use an action to cast the *levitate* spell on yourself at will."
bootl.equippable=true
bootl.eqslot='boots'
bootl.type.push('equipment')
bootl.icon=bootl.iconmake('bootl.jpg')
bootl.equipped=true

var decan=new Items
decan.name='Decanter of Endless Water'
decan.magic=0
decan.description=
`This stoppered flask sloshes when shaken, as if it contains water. The decanter weighs 2 pounds.",
                "You can use an action to remove the stopper and speak one of three command words, whereupon an amount of fresh water or salt water (your choice) pours out of the flask. The water stops pouring out at the start of your next turn. Choose from the following options:",
                [
                    "“Stream” produces 1 gallon of water.",
                    "“Fountain” produces 5 gallons of water.",
                    "“Geyser” produces 30 gallons of water that gushes forth in a geyser 30 feet long and 1 foot wide. As a bonus action while holding the decanter, you can aim the geyser at a creature you can see within 30 feet of you. The target must succeed on a DC 13 Strength saving throw or take 1d4 bludgeoning damage and fall prone. Instead of a creature, you can target an object that isn’t being worn or carried and that weighs no more than 200 pounds. The object is either knocked over or pushed up to 15 feet away from you."
                ]`
decan.weight=2
decan.usable=true
decan.equippable=false
decan.rarity='uncommon'
decan.icon=decan.iconmake('deca.jpg')



export var itemray=[armo1,bootl,baxe, decan]