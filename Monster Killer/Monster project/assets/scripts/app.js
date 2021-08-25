const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;

let choosenMaxLife = 100;

let currentMonsterHealth = choosenMaxLife;
let currentPlayerHealth = choosenMaxLife;

adjustHealthBars(choosenMaxLife);


function attackMonster(mode) {
  let maxDamage;
  if (mode === 'ATTACK') {
    maxDamage = ATTACK_VALUE;
  } else if (mode === 'STRONG_ATTACK') {
    maxDamage = STRONG_ATTACK_VALUE;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You Won!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You Lost!');
  } else if (currentMonsterHealth <= 0 && currentMonsterHealth >= 0) {
    alert('You have a Draw!');
  }
}

function attackHandler() {
  attackMonster('ATTACK');
}

function strongAttackHandler() {
  attackMonster('STRONG_ATTACK');
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
