// Copyright (c) 2022 KrestUI
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { DirPersist } from './dirpersist';
import { get_file_contents } from './files';
import { JSDOMParser } from './jsdomparser';

async function doProcess(output_file: string, output_dir: string) {
  const parser = new JSDOMParser();
  const persist = new DirPersist(output_dir);
  const data = await get_file_contents(output_file);
  const event_groups = parser.parse(data);
  persist.persist(event_groups);
}
export function main() {
  doProcess('index.html', './../../uievents-key/src').then(
    (value: void) => {},
    (err) => {
      console.log(`Error processing ${err}`);
    }
  );
}
