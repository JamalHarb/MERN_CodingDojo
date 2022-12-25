class Ninja{
    constructor(name, health=0){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log("The ninja's name is " + this.name);
    }
    showStats(){
        console.log("name: " + this.name);
        console.log("health: " + this.health);
        console.log("speed: " + this.speed);
        console.log("strength: " + this.strength);
    }
    drinkShake(){
        this.health += 10;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkShake();
ninja1.drinkShake();
ninja1.drinkShake();
ninja1.showStats();

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkShake();
        console.log("Do not procrastinate today's duty till tomorrow.")
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();