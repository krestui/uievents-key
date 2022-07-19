// Copyright (c) 2022 KrestUI
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { EventGroup } from './parser';
import camelCase from 'camelcase';
import { writeFile } from 'fs';

export abstract class Persist {
  static keyToEnumName(str: string): string {
    return camelCase(str, { pascalCase: true });
  }

  static writeContents(filename: string, data: string) {
    writeFile(filename, data, 'utf8', (err) => {
      if (err) {
        console.log(`Error writing to ${filename} - ${err.message}`);
      }
    });
  }

  abstract persist(groups: Array<EventGroup>): void;
}
