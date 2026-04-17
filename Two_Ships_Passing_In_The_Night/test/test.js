/* global describe, it */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */

import assert from 'assert';

// import test fonctionnels
import { gameState } from '../src/maps.js';
// import test unitaires
import { lerp, mapLinear, randFloatSpread } from '../src/math.js';

// Tests unitaires
describe('Utilitire Mathématique', () => {
  it('Doit retourner un nombre compris entre 0 & -1', () => {
    const range = 1;
    const result = randFloatSpread(range);
    assert.ok(result >= -1 && result <= 1, true);
  });
});

describe('Test de mapLinear', () => {
  it('Doit retourner 3', () => {
    const result = mapLinear(1, 2, 3, 4, 5);
    assert.strictEqual(result, 3);
  });
});

describe('Test de mapLinear', () => {
  it('Doit retourner la valeur précise passée dans la variable expected', () => {
    const result = mapLinear(1, 20, 3, 40, 5);
    const expected = 0.882352941176471;
    assert.strictEqual(result.toFixed(10), expected.toFixed(10));
  });
});

describe('Test de lerp', () => {
  it('Doit retourner 41', () => {
    const result = lerp(1, 3, 20);
    assert.strictEqual(result, 41);
  });
});

describe('Test de lerp', () => {
  it('Doit retourner -15.3', () => {
    const result = lerp(1.3, -7, 2);
    assert.strictEqual(result, -15.3);
  });
});

// Tests fonctionnels
describe('Test logique du jeu', () => {
  it('Vérifier que au lancement du jeu que le score & la santé sont bien instanciés', () => {
    assert.strictEqual(
      gameState.health,
      100,
      'La santé doit être instanciée à 100',
    );
    assert.strictEqual(gameState.score, 0, 'Le score doit être instanciée à 0');
  });

  it('Game Over, lorsque la santé est à 0', () => {
    gameState.health = 10;

    const takeDamage = damage => {
      gameState.health -= damage;
      if (gameState.health <= 0) {
        document.exitPointerLock();
        document.querySelector('.e').hidden = false;
      }
    };

    takeDamage(20);
    assert.strictEqual(gameState.health, -10);
  });
});
