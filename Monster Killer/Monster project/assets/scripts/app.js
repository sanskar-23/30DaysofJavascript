const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;

let choosenMaxLife = 100;

let currentMonsterHealth = choosenMaxLife;
let currentPlayerHealth = choosenMaxLife;

adjustHealthBars(choosenMaxLife);


function attackHandler() {
 const damage = dealMonsterDamage(ATTACK_VALUE);
 currentMonsterHealth -= damage;
 const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
 currentPlayerHealth -= playerDamage;
 if(currentMonsterHealth <=0 && currentPlayerHealth > 0) {
  alert('You Won!');
 }
 else if (currentPlayerHealth <=0){
  alert('You Lost!');
 }
}

attackBtn.addEventListener('click', attackHandler);
