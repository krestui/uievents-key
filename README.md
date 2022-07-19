# uievents-key

`@krestui/uievents-key` contains the enum constants for the KeyboardEvent key values as mentioned in the specification - [https://w3c.github.io/uievents-key/](https://w3c.github.io/uievents-key/) .

## Installation

## LICENSE

This library is issued under MIT License free to integrate and distribute.

## Usage

The following enums are available to be used in the library

### AppsKeys

```ts
export enum AppsKeys {
  // The first generic "LaunchApplication" key. This is commonly associated with launching "My Computer", and may have a computer symbol on the key. (APPCOMMAND_LAUNCH_APP1). Required: false
  LaunchApplication1 = 'LaunchApplication1',
  // The second generic "LaunchApplication" key. This is commonly associated with launching "Calculator", and may have a calculator symbol on the key. (APPCOMMAND_LAUNCH_APP2, KEYCODE_CALCULATOR). Required: false
  LaunchApplication2 = 'LaunchApplication2',
  // The "Calendar" key. (KEYCODE_CALENDAR). Required: false
  LaunchCalendar = 'LaunchCalendar',
  // The "Contacts" key. (KEYCODE_CONTACTS). Required: false
  LaunchContacts = 'LaunchContacts',
  // The "Mail" key. (APPCOMMAND_LAUNCH_MAIL). Required: false
  LaunchMail = 'LaunchMail',
  // The "Media Player" key. (APPCOMMAND_LAUNCH_MEDIA_SELECT). Required: false
  LaunchMediaPlayer = 'LaunchMediaPlayer',
  // The "Music Player" key.. Required: false
  LaunchMusicPlayer = 'LaunchMusicPlayer',
  // The "Phone" key.. Required: false
  LaunchPhone = 'LaunchPhone',
  // The "Screen Saver" key.. Required: false
  LaunchScreenSaver = 'LaunchScreenSaver',
  // The "Spreadsheet" key.. Required: false
  LaunchSpreadsheet = 'LaunchSpreadsheet',
  // The "Web Browser" key.. Required: false
  LaunchWebBrowser = 'LaunchWebBrowser',
  // The "WebCam" key.. Required: false
  LaunchWebCam = 'LaunchWebCam',
  // The "Word Processor" key.. Required: false
  LaunchWordProcessor = 'LaunchWordProcessor'
}
```
