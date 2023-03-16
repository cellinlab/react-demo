import { assertValueCanBeRendered } from './assertValueCanBeRendered';

test('should raise exception when not a string or number', () => {
  expect(() => {
    assertValueCanBeRendered(true);
  }).toThrow('value is not a string or a number');
});

test('should not raise exception when a string', () => {
  expect(() => {
    assertValueCanBeRendered('hello');
  }).not.toThrow();
});

test('should not raise exception when a number', () => {
  expect(() => {
    assertValueCanBeRendered(123);
  }).not.toThrow();
});
