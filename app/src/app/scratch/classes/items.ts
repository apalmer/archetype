export class Items {
    flair:string;
    name:string;
    plus:number;
    cost:number;
    weight:number;
    description:string;
    type:Array<string>;
    attunereq:boolean=false;
    equippable:boolean;
    eqslot:string;
    usuable:boolean;
    consumable:boolean;
    quantity: number=1;
    infusion: any;
    useffect(player){};
    eqeffect(player){};

}

export var armo1= new Items
armo1.name='EnArmor'
armo1.description='Custom armor created by SciMagic prototype'
armo1.cost=200
armo1.equippable=true
armo1.eqslot='armor'
armo1.weight=60
