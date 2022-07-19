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

  writeGroupFile = (
    filenameonly: string,
    enumValue: string,
    sortedKeys: Array<EventKey>
  ): string => {
    const keyStrings = sortedKeys.map((key: EventKey) => {
      const value = key.key;
      const description = key.description.replace(/\n/g, '\n//');
      return `// ${description}. Required: ${key.required ? 'Yes' : 'No'}
      ${value} = "${value}"`;
    });
    const keyString = keyStrings.join(',\n');
    const filename = join(this.output_dir, filenameonly + '.ts');
    const enumDefinition = `
    export enum ${enumValue} {
      ${keyString}
    }
    `;
    Persist.writeContents(
      filename,
      `
${licenseHeader}
${autoGenHeader}
${enumDefinition}
`
    );
    sortedKeys.forEach((key: EventKey) => {
      console.log(`${key.key} - ${key.required ? 'Yes' : 'No'} - ${key.description}`);
    });
    const markdownLine = `
### ${enumValue}

\`\`\`ts
${enumDefinition}
\`\`\`    
`;
    return markdownLine;
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

  writeMarkdown = (content: string) => {
    Persist.writeContents(join(this.output_dir, 'USAGE.md'), content);
  };

  persist = (groups: Array<EventGroup>): void => {
    const indexFileLines: Array<string> = [];
    const mapFileLines: Array<string> = [];
    const mapUpdateLines: Array<string> = [];
    const markdownLines: Array<string> = [];
    groups.forEach((value: EventGroup) => {
      console.log(`*****   ${value.groupName} ******`);
      const enumValue = Persist.keyToEnumName(value.groupName) + 'Keys';
      const filenameonly = value.groupName + '-keys';
      const sortedKeys = value.keys.sort();
      const markdownLine = this.writeGroupFile(filenameonly, enumValue, sortedKeys);
      markdownLines.push(markdownLine);
      indexFileLines.push(`export { ${enumValue} } from './${filenameonly}';`);
      mapFileLines.push(`import { ${enumValue} } from './${filenameonly}';`);
      mapUpdateLines.push(
        `Object.keys(${enumValue}).map((value: string) => {keyMap.set(value, true);});`
      );
    });
    this.writeMapFile(mapFileLines.join('\n'), mapUpdateLines.join('\n'));
    this.writeIndex(indexFileLines.join('\n'));
    this.writeMarkdown(markdownLines.join('\n'));
    console.log(`Should be writing to ${this.output_dir}`);
  };
}
