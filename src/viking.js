// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;        
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        if (this.health <= 0) {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
        if (this.health <= 0) {
            return "A Saxon has died in combat";
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking) {                
        this.vikingArmy.push(Viking);        
    }
    addSaxon(Saxon) {        
        this.saxonArmy.push(Saxon);       
    }
    vikingAttack() {            
            let randomVik = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
            let randomSax = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]            
            let saxIndex = this.saxonArmy.indexOf(randomSax);
            let result = randomSax.receiveDamage(randomVik.strength);
            if (randomSax.health <= 0) {
                this.saxonArmy.splice(saxIndex, 1);
            }
            return result;
    }
    saxonAttack() {
            let randomVik = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
            let randomSax = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]            
            let VikIndex = this.saxonArmy.indexOf(randomVik);
            let result = randomVik.receiveDamage(randomSax.strength)
            if (randomVik.health <= 0) {
                this.vikingArmy.splice(VikIndex, 1);
            }
            return result;
    }

    // bonusFive(attacker = [], defender = []) {
    //     let randomVik = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
    //     let randomSax = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]     
    //     let result;

    //     if (attacker === this.vikingArmy) {
    //             result = randomSax.receiveDamage(randomVik.strength);
    //         if (randomSax.health <= 0) {
    //             this.saxonArmy.splice(saxIndex, this.saxonArmy.indexOf(randomSax));
    //         }
    //     }
    //     else {
    //             result = randomVik.receiveDamage(randomSax.strength);
    //         if (randomVik.health <= 0) {
    //             this.vikingArmy.splice(VikIndex, this.saxonArmy.indexOf(randomVik));
    //         }
    //     }
    //     return result

    // }

    showStatus() {
        
        if ( this.saxonArmy.length === 0 ) {
            return "Vikings have won the war of the century!";
        } 
        if ( this.vikingArmy.length === 0 )  {
            return "Saxons have fought for their lives and survived another day...";
        } 
        if ( this.vikingArmy.length !== 0 && this.saxonArmy.length !== 0 ) {
            return "Vikings and Saxons are still in the thick of battle.";
        } 
    }
}


