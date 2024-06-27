const assert = require('assert');

// Calculator functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

// Test cases
try {
  // Test addition
  assert.strictEqual(add(1, 2), 3, '1 + 2 should equal 3');
  assert.strictEqual(add(-1, 1), 0, '-1 + 1 should equal 0');
  assert.strictEqual(add(0, 0), 0, '0 + 0 should equal 0');

  // Test subtraction
  assert.strictEqual(subtract(5, 3), 2, '5 - 3 should equal 2');
  assert.strictEqual(subtract(0, 0), 0, '0 - 0 should equal 0');
  assert.strictEqual(subtract(-1, -1), 0, '-1 - (-1) should equal 0');

  // Test multiplication
  assert.strictEqual(multiply(2, 3), 6, '2 * 3 should equal 6');
  assert.strictEqual(multiply(-1, 1), -1, '-1 * 1 should equal -1');
  assert.strictEqual(multiply(0, 5), 0, '0 * 5 should equal 0');

  // Test division
  assert.strictEqual(divide(6, 3), 2, '6 / 3 should equal 2');
  assert.strictEqual(divide(-4, 2), -2, '-4 / 2 should equal -2');
  
  // This assertion will throw an error because of division by zero
  assert.throws(() => { divide(1, 0); }, /Division by zero/, 'Division by zero should throw an error');

  console.log('All tests passed successfully.');

} catch (error) {
  if (error instanceof assert.AssertionError) {
    console.error('Assertion error:', error.message);
  } else {
    console.error('Unexpected error:', error.message);
  }
}
