export class Player {
  constructor(name, level)
   {
    this.name = name;
    this.level = level;
    this.xp = 0; 
    this.xpTopLevel = 100;

  }
info(){
  console.log(`${this.name} has reached Level ${this.level}!`);
  console.log(`XP: ${this.xp}/${this.xpTopLevel}`);
} 
levelUp() {
  this.level++
  console.log(` ${this.name} leveled up to Level ${this.level }!`);
}
gainXP(amount) {
  console.log(`${this.name} gained ${amount} XP!`);
    this.xp += amount;

    while (this.xp >= this.xpToLevel) {
      this.xp -= this.xpToLevel; 
      this.levelUp();
  }
   console.log(`Current XP: ${this.xp}/${this.xpToLevel}\n`);
}

}
