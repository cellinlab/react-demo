import { isChecked } from './isChecked';

test('should return true if idValue is in checkedIds', () => {
  const checkedIds = ['1', '2', '3'];
  const idValue = '2';
  expect(isChecked(checkedIds, idValue)).toBe(true);
});

test('should return false if idValue is not in checkedIds', () => {
  const checkedIds = ['1', '2', '3'];
  const idValue = '4';
  expect(isChecked(checkedIds, idValue)).toBe(false);
});
