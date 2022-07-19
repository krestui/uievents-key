// Copyright (c) 2022 KrestUI
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// Warning: Auto-Generated Code below. Do not modify.

import { GeneralKeys } from './general-keys';
import { ModifierKeys } from './modifier-keys';
import { ModifierLegacyKeys } from './modifier-legacy-keys';
import { WhitespaceKeys } from './whitespace-keys';
import { NavigationKeys } from './navigation-keys';
import { EditingKeys } from './editing-keys';
import { UiKeys } from './ui-keys';
import { DeviceKeys } from './device-keys';
import { CompositionKeys } from './composition-keys';
import { ImeKoreanKeys } from './ime-korean-keys';
import { ImeJapaneseKeys } from './ime-japanese-keys';
import { FunctionKeys } from './function-keys';
import { MultimediaKeys } from './multimedia-keys';
import { MultimediaNumpadKeys } from './multimedia-numpad-keys';
import { AudioKeys } from './audio-keys';
import { SpeechKeys } from './speech-keys';
import { AppsKeys } from './apps-keys';
import { BrowserKeys } from './browser-keys';
import { MobilePhoneKeys } from './mobile-phone-keys';
import { TvKeys } from './tv-keys';
import { MediaControllerKeys } from './media-controller-keys';
import { MediaControllerDupKeys } from './media-controller-dup-keys';

const keyMap = new Map<string, boolean>();
Object.keys(GeneralKeys).map((value: string) => {
  keyMap.set(value, true);
});
Object.keys(ModifierKeys).map((value: string) => {
  keyMap.set(value, true);
});
Object.keys(ModifierLegacyKeys).map((value: string) => {
  keyMap.set(value, true);
});
Object.keys(WhitespaceKeys).map((value: string) => {
  keyMap.set(value, true);
});
Object.keys(NavigationKeys).map((value: string) => {
  keyMap.set(value, true);
});
Object.keys(EditingKeys).map((value: string) => {
  keyMap.set(value, true);
});
Object.keys(UiKeys).map((value: string) => {
  keyMap.set(value, true);
});
Object.keys(DeviceKeys).map((value: string) => {
  keyMap.set(value, true);
});
Object.keys(CompositionKeys).map((value: string) => {
  keyMap.set(value, true);
});
Object.keys(ImeKoreanKeys).map((value: string) => {
  keyMap.set(value, true);
});
Object.keys(ImeJapaneseKeys).map((value: string) => {
  keyMap.set(value, true);
});
Object.keys(FunctionKeys).map((value: string) => {
  keyMap.set(value, true);
});
Object.keys(MultimediaKeys).map((value: string) => {
  keyMap.set(value, true);
});
Object.keys(MultimediaNumpadKeys).map((value: string) => {
  keyMap.set(value, true);
});
Object.keys(AudioKeys).map((value: string) => {
  keyMap.set(value, true);
});
Object.keys(SpeechKeys).map((value: string) => {
  keyMap.set(value, true);
});
Object.keys(AppsKeys).map((value: string) => {
  keyMap.set(value, true);
});
Object.keys(BrowserKeys).map((value: string) => {
  keyMap.set(value, true);
});
Object.keys(MobilePhoneKeys).map((value: string) => {
  keyMap.set(value, true);
});
Object.keys(TvKeys).map((value: string) => {
  keyMap.set(value, true);
});
Object.keys(MediaControllerKeys).map((value: string) => {
  keyMap.set(value, true);
});
Object.keys(MediaControllerDupKeys).map((value: string) => {
  keyMap.set(value, true);
});

export function isSpecialKey(value: string): boolean {
  return keyMap.get(value) ? true : false;
}
