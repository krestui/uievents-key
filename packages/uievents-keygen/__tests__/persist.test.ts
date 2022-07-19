// Copyright (c) 2022 KrestUI
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Persist } from '../src/persist';

test('testing Persist::keyToEnumName', () => {
  expect(Persist.keyToEnumName('multimedia')).toEqual('Multimedia');
});
