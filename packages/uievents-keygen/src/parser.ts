// Copyright (c) 2022 KrestUI
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

export type EventKey = {
  key: string;
  required: boolean;
  description: string;
};

export type EventGroup = {
  groupName: string;
  keys: Array<EventKey>;
};

export interface Parser {
  parse(data: string): Array<EventGroup>;
}
