// Copyright (c) 2022 KrestUI
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Persist } from './persist';
import { EventGroup, EventKey } from './parser';
import { join } from 'path';

const licenseHeader = `
// Copyright (c) 2022 KrestUI
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
`;

const autoGenHeader = `
// Warning: Auto-Generated Code below. Do not modify.
`;

export class DirPersist extends Persist {
  output_dir: string;

  constructor(output_dir: string) {
    super();
    this.output_dir = output_dir;
  }

  writeGroupFile = (filenameonly: string, enumValue: string, sortedKeys: Array<EventKey>) => {
    const keyStrings = sortedKeys.map((key: EventKey) => {
      const value = key.key;
      const description = key.description.replace(/\n/g, '\n//');
      return `// ${description}. Required: ${key.required}
${value} = "${value}"`;
    });
    const keyString = keyStrings.join(',\n');
    const filename = join(this.output_dir, filenameonly + '.ts');
    Persist.writeContents(
      filename,
      `
${licenseHeader}
${autoGenHeader}
export enum ${enumValue} {
${keyString}
}
`
    );
    sortedKeys.forEach((key: EventKey) => {
      console.log(`${key.key} - ${key.required} - ${key.description}`);
    });
  };

  writeMapFile = (importLines: string, updateLines: string) => {
    const content = `
${licenseHeader}
${autoGenHeader}
${importLines}

const keyMap = new Map<string, boolean>();
    ${updateLines}

export function isSpecialKey(value: string): boolean {
  return keyMap.get(value) ? true: false;
}
`;
    Persist.writeContents(join(this.output_dir, 'key-map.ts'), content);
  };

  writeIndex = (exportStatements: string) => {
    const content = `
${licenseHeader}    
${autoGenHeader}

${exportStatements}
export { isSpecialKey } from './key-map';
`;
    Persist.writeContents(join(this.output_dir, 'index.ts'), content);
  };

  persist = (groups: Array<EventGroup>): void => {
    const indexFileLines: Array<string> = [];
    const mapFileLines: Array<string> = [];
    const mapUpdateLines: Array<string> = [];
    groups.forEach((value: EventGroup) => {
      console.log(`*****   ${value.groupName} ******`);
      const enumValue = Persist.keyToEnumName(value.groupName) + 'Keys';
      const filenameonly = value.groupName + '-keys';
      const sortedKeys = value.keys.sort();
      this.writeGroupFile(filenameonly, enumValue, sortedKeys);
      indexFileLines.push(`export { ${enumValue} } from './${filenameonly}';`);
      mapFileLines.push(`import { ${enumValue} } from './${filenameonly}';`);
      mapUpdateLines.push(
        `Object.keys(${enumValue}).map((value: string) => {keyMap.set(value, true);});`
      );
    });
    this.writeMapFile(mapFileLines.join('\n'), mapUpdateLines.join('\n'));
    this.writeIndex(indexFileLines.join('\n'));
    console.log(`Should be writing to ${this.output_dir}`);
  };
}
