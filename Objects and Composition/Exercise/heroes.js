function solve() {
  return {
    fighter(name) {
      let res = {
        name,
        health: 100,
        stamina: 100,
        fight() {
          res.stamina--;
          console.log(`${name} slashes at the foe!`);
        },
      };
      return res;
    },
    mage(name) {
      let res = {
        name,
        health: 100,
        mana: 100,
        cast(spell) {
          res.mana--;
          console.log(`${name} cast ${spell}`);
        },
      };
      return res;
    },
  };
}
let create = solve();

const scorcher = create.mage("Scorcher");

scorcher.cast("fireball");

scorcher.cast("thunder");

scorcher.cast("light");

const scorcher2 = create.fighter("Scorcher 2");

scorcher2.fight();

console.log(scorcher2.stamina);

console.log(scorcher.mana);
