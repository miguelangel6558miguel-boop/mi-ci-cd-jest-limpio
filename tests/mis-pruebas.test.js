const { test, expect } = require('@jest/globals');
const { scanSeguro } = require('../hola-cyber.js');

// Unit test: Prueba la función sola
test('scanSeguro agrega "es seguro" correctamente', () => {
  const resultado = scanSeguro('Prueba cyber');
  expect(resultado).toBe('Prueba cyber es seguro, sin virus.');
});

// Integration test: Prueba que el archivo entero funcione
test('hola-cyber.js corre sin errores', () => {
  expect(typeof scanSeguro).toBe('function');
  expect(scanSeguro('App')).toContain('seguro');
});

// Smoke test: Prueba básica, ¿todo arranca?
test('Código básico está OK', () => {
  expect(true).toBe(true);
});
