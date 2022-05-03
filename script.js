class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target){
        if(target instanceof Unit){
            target.res -= this.power;
            console.log(`${this.name} attacked ${target.name} and dealt ${this.power} damage!`);
        }
        else {
            throw new Error("Target must be a unit!");
        }
    }
    showStats(){
        console.log(`Name: ${this.name} || Power: ${this.power} || Resilience: ${this.res}`)
    }
}

class Effect extends Card{
    constructor(name, cost, stat, magnitude){
        super(name, cost);
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target){
        if(target instanceof Unit){
            console.log(`${this.name} was cast on ${target.name}!`);
            if(this.stat === "res"){
                target.res += this.magnitude;
            }
            else {
                target.power += this.magnitude;
            }
        }
        else {
            throw new Error("Target must be a unit!");
        }
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const hardAlgorithm = new Effect("Hard Algorithm", 2, "res", 3);
hardAlgorithm.play(redBeltNinja);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "res", -2);
unhandledPromiseRejection.play(redBeltNinja);
const pairProgramming = new Effect("Pair Programming", 3, "power", 2);
pairProgramming.play(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);
redBeltNinja.showStats();
blackBeltNinja.showStats();