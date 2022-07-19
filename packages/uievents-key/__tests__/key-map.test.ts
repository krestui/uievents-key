// Copyright (c) 2022 KrestUI
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { isSpecialKey } from '../src/key-map';

test('testing isSpecialKey - truth', () => {
  expect(isSpecialKey('Tab')).toBe(true);
  expect(isSpecialKey('Control')).toBe(true);
  expect(isSpecialKey('Alt')).toBe(true);
  expect(isSpecialKey('CapsLock')).toBe(true);
});

test('testing isSpecialKey - false', () => {
  expect(isSpecialKey('A')).toBe(false);
  expect(isSpecialKey('a')).toBe(false);
  expect(isSpecialKey('0')).toBe(false);
  expect(isSpecialKey('9')).toBe(false);
});
