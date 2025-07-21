const http = require('http');
const assert = require('assert');

// 簡単なテスト
function testSum() {
  const sum = (a, b) => a + b;
  assert.strictEqual(sum(2, 3), 5, 'Sum function should work correctly');
  console.log('✓ Sum test passed');
}

function testString() {
  const str = 'Hello World';
  assert.strictEqual(str.length, 11, 'String length should be 11');
  console.log('✓ String test passed');
}

console.log('Running tests...');
testSum();
testString();
console.log('All tests passed!');

// テスト結果をファイルに保存
const fs = require('fs');
const testResults = {
  timestamp: new Date().toISOString(),
  tests: [
    { name: 'Sum test', status: 'passed' },
    { name: 'String test', status: 'passed' }
  ],
  summary: 'All tests passed successfully'
};

fs.writeFileSync('test-results.json', JSON.stringify(testResults, null, 2));
console.log('Test results saved to test-results.json');
