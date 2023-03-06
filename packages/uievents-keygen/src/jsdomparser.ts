// Copyright (c) 2022 KrestUI
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { JSDOM } from 'jsdom';

import { Parser, EventGroup, EventKey } from './parser';

export class JSDOMParser implements Parser {
  parse(data: string): Array<EventGroup> {
    console.log(data.length);
    const dom = new JSDOM(data);
    const elements = dom.window.document.querySelectorAll('table');
    const event_groups: Array<EventGroup> = [];
    elements.forEach((group: HTMLTableElement, i: number) => {
      const id = group.attributes.getNamedItem('id')?.value;
      const group_name = id?.slice('key-table-'.length);
      const event_group = {
        groupName: group_name,
        keys: []
      } as EventGroup;
      const keys = group.querySelectorAll('.key-table-key');
      keys.forEach((value: Element, j: number) => {
        const key = value.textContent?.trim();
        const trimmedKey = key?.slice(1, -1);
        const requiredNode = value.nextSibling;
        const description = requiredNode?.nextSibling;
        const event_key = {
          key: trimmedKey,
          required: requiredNode?.textContent?.trim() === 'No' ? false : true,
          description: description?.textContent?.trim()
        } as EventKey;
        event_group.keys.push(event_key);
      });
      event_groups.push(event_group);
    });
    return event_groups;
  }
}
