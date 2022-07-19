# uievents-key

`@krestui/uievents-key` contains the enum constants for the KeyboardEvent key values as mentioned in the specification - [https://w3c.github.io/uievents-key/](https://w3c.github.io/uievents-key/) .

## Installation

## LICENSE

This library is issued under MIT License free to integrate and distribute.

## Code

The enum values have been scraped from the html page and auto-generated. 

## Usage

The following enums are available to be used in the library

### GeneralKeys

```ts
export enum GeneralKeys {
  // This key value is used when an implementation is unable to								identify another key value, due to either hardware,
  //								platform, or software constraints.. Required: true
  Unidentified = 'Unidentified'
}
```

### ModifierKeys

```ts
export enum ModifierKeys {
  // The Alt (Alternative) key. This key enables the alternate modifier function for interpreting concurrent or subsequent keyboard input. This key value is also used for the Apple Option key.. Required: true
  Alt = 'Alt',
  // The Alternate Graphics (AltGr or AltGraph) key.								This key is used enable the ISO Level 3 shift modifier (the standard Shift key is the level 2 modifier).
  //								See [ISO9995-1].. Required: true
  AltGraph = 'AltGraph',
  // The Caps Lock (Capital) key.								Toggle capital character lock function for interpreting subsequent keyboard input event.. Required: true
  CapsLock = 'CapsLock',
  // The Control or Ctrl key, to enable control modifier function for interpreting concurrent or subsequent keyboard input.. Required: true
  Control = 'Control',
  // The Function switch Fn key. Activating this key simultaneously with another key changes that key’s value to an alternate character or function.
  //								This key is often handled directly in the keyboard hardware and does not usually generate key events.. Required: false
  Fn = 'Fn',
  // The Function-Lock (FnLock or F-Lock) key.								Activating this key switches the mode of the keyboard to changes some keys' values to an alternate character or function.
  //								This key is often handled directly in the keyboard hardware and does not usually generate key events.. Required: false
  FnLock = 'FnLock',
  // The Meta key, to enable meta modifier function for interpreting concurrent or subsequent keyboard input.								This key value is used for the Windows Logo key and the Apple Command or ⌘ key.. Required: true
  Meta = 'Meta',
  // The NumLock or Number Lock key, to toggle numpad mode function for interpreting subsequent keyboard input.. Required: true
  NumLock = 'NumLock',
  // The Scroll Lock key, to toggle between scrolling and cursor movement modes.. Required: true
  ScrollLock = 'ScrollLock',
  // The Shift key, to enable shift modifier function for interpreting concurrent or subsequent keyboard input.. Required: true
  Shift = 'Shift',
  // The Symbol modifier key (used on some virtual keyboards).. Required: false
  Symbol = 'Symbol',
  // The Symbol Lock key.. Required: false
  SymbolLock = 'SymbolLock'
}
```

### ModifierLegacyKeys

```ts
export enum ModifierLegacyKeys {
  // The Hyper key.. Required: false
  Hyper = 'Hyper',
  // The Super key.. Required: false
  Super = 'Super'
}
```

### WhitespaceKeys

```ts
export enum WhitespaceKeys {
  // The Enter or ↵ key, to activate current selection or accept current input. This key value is also used for the Return (Macintosh numpad) key. This key value is also used for the Android KEYCODE_DPAD_CENTER.. Required: true
  Enter = 'Enter',
  // The Horizontal Tabulation Tab key.. Required: true
  Tab = 'Tab'
}
```

### NavigationKeys

```ts
export enum NavigationKeys {
  // The down arrow key, to navigate or traverse downward. (KEYCODE_DPAD_DOWN). Required: true
  ArrowDown = 'ArrowDown',
  // The left arrow key, to navigate or traverse leftward. (KEYCODE_DPAD_LEFT). Required: true
  ArrowLeft = 'ArrowLeft',
  // The right arrow key, to navigate or traverse rightward. (KEYCODE_DPAD_RIGHT). Required: true
  ArrowRight = 'ArrowRight',
  // The up arrow key, to navigate or traverse upward. (KEYCODE_DPAD_UP). Required: true
  ArrowUp = 'ArrowUp',
  // The End key, used with keyboard entry to go to the end of content (KEYCODE_MOVE_END).. Required: true
  End = 'End',
  // The Home key, used with keyboard entry, to go to start of content (KEYCODE_MOVE_HOME). For the mobile phone Home key (which goes to the phone’s main screen), use "GoHome".. Required: true
  Home = 'Home',
  // The Page Down key, to scroll down or display next page of content.. Required: true
  PageDown = 'PageDown',
  // The Page Up key, to scroll up or display previous page of content.. Required: true
  PageUp = 'PageUp'
}
```

### EditingKeys

```ts
export enum EditingKeys {
  // The Backspace key. This key value is also used for the key labeled Delete on MacOS keyboards.. Required: true
  Backspace = 'Backspace',
  // Remove the currently selected input.. Required: false
  Clear = 'Clear',
  // Copy the current selection. (APPCOMMAND_COPY). Required: false
  Copy = 'Copy',
  // The Cursor Select (Crsel) key.. Required: false
  CrSel = 'CrSel',
  // Cut the current selection. (APPCOMMAND_CUT). Required: false
  Cut = 'Cut',
  // The Delete (Del) Key.								This key value is also used for the key labeled Delete on MacOS keyboards when modified by the Fn key.. Required: true
  Delete = 'Delete',
  // The Erase to End of Field key.  This key deletes all characters from the current cursor position to the end of the current field.. Required: false
  EraseEof = 'EraseEof',
  // The Extend Selection (Exsel) key.. Required: false
  ExSel = 'ExSel',
  // The Insert (Ins) key, to toggle between text modes for insertion or overtyping. (KEYCODE_INSERT). Required: true
  Insert = 'Insert',
  // The Paste key. (APPCOMMAND_PASTE). Required: false
  Paste = 'Paste',
  // Redo the last action. (APPCOMMAND_REDO). Required: false
  Redo = 'Redo',
  // Undo the last action. (APPCOMMAND_UNDO). Required: false
  Undo = 'Undo'
}
```

### UiKeys

```ts
export enum UiKeys {
  // The Accept (Commit, OK) key. Accept current option or input method sequence conversion.. Required: false
  Accept = 'Accept',
  // The Again key, to redo or repeat an action.. Required: false
  Again = 'Again',
  // The Attention (Attn) key.. Required: false
  Attn = 'Attn',
  // The Cancel key.. Required: false
  Cancel = 'Cancel',
  // Show the application’s context menu.								This key is commonly found between the right Meta key and the right Control key.. Required: true
  ContextMenu = 'ContextMenu',
  // The Esc key. This key was originally used to initiate an escape sequence, but is								now more generally used to exit or "escape" the current context, such as closing a dialog
  //								or exiting full screen mode.. Required: true
  Escape = 'Escape',
  // The Execute key.. Required: false
  Execute = 'Execute',
  // Open the Find dialog. (APPCOMMAND_FIND). Required: false
  Find = 'Find',
  // Open a help dialog or toggle display of help information. (APPCOMMAND_HELP, KEYCODE_HELP). Required: true
  Help = 'Help',
  // Pause the current state or application (as appropriate).
  //       Do not use this value for the Pause button on media controllers. Use "MediaPause" instead.. Required: true
  Pause = 'Pause',
  // Play or resume the current state or application (as appropriate).
  //       Do not use this value for the Play button on media controllers. Use "MediaPlay" instead.. Required: false
  Play = 'Play',
  // The properties (Props) key.. Required: false
  Props = 'Props',
  // The Select key.. Required: false
  Select = 'Select',
  // The ZoomIn key. (KEYCODE_ZOOM_IN). Required: false
  ZoomIn = 'ZoomIn',
  // The ZoomOut key. (KEYCODE_ZOOM_OUT). Required: false
  ZoomOut = 'ZoomOut'
}
```

### DeviceKeys

```ts
export enum DeviceKeys {
  // The Brightness Down key. Typically controls the display brightness. (KEYCODE_BRIGHTNESS_DOWN). Required: false
  BrightnessDown = 'BrightnessDown',
  // The Brightness Up key. Typically controls the display brightness. (KEYCODE_BRIGHTNESS_UP). Required: false
  BrightnessUp = 'BrightnessUp',
  // Toggle removable media to eject (open) and insert (close) state. (KEYCODE_MEDIA_EJECT). Required: false
  Eject = 'Eject',
  // The LogOff key.. Required: false
  LogOff = 'LogOff',
  // Toggle power state. (KEYCODE_POWER)
  //       Note: Some devices might not expose this key to the operating environment.. Required: false
  Power = 'Power',
  // The PowerOff key. Sometime called PowerDown.. Required: false
  PowerOff = 'PowerOff',
  // The Print Screen or SnapShot key, to initiate print-screen function.. Required: true
  PrintScreen = 'PrintScreen',
  // The Hibernate key.									This key saves the current state of the computer to disk so that it can be restored. The computer will then shutdown.. Required: false
  Hibernate = 'Hibernate',
  // The Standby key.									This key turns off the display and places the computer into a low-power mode without completely shutting down.
  //									It is sometimes labelled Suspend or Sleep key. (KEYCODE_SLEEP). Required: false
  Standby = 'Standby',
  // The WakeUp key. (KEYCODE_WAKEUP). Required: false
  WakeUp = 'WakeUp'
}
```

### CompositionKeys

```ts
export enum CompositionKeys {
  // The All Candidates key, to initate the multi-candidate mode.. Required: false
  AllCandidates = 'AllCandidates',
  // The Alphanumeric key.. Required: false
  Alphanumeric = 'Alphanumeric',
  // The Code Input key, to initiate the Code Input mode to allow characters to be entered by their code points.. Required: false
  CodeInput = 'CodeInput',
  // The Compose key, also known as Multi_key on the X Window System.  This key acts in a manner similar to a									dead key, triggering a mode where subsequent key presses are combined to produce a different character.. Required: false
  Compose = 'Compose',
  // The Convert key, to convert the current input method sequence.. Required: false
  Convert = 'Convert',
  // A dead key combining key. It may be any combining key from any keyboard layout. For example, on a									PC/AT French keyboard, using a French mapping and without any modifier activiated, this is the key value U+0302 COMBINING CIRCUMFLEX ACCENT. In another layout this might be a different unicode combining key. For applications that need to differentiate between specific combining characters, the associated compositionupdate event’s data attribute provides the specific key value.. Required: false
  Dead = 'Dead',
  // The Final Mode Final key used on some Asian keyboards, to enable the final mode for IMEs.. Required: false
  FinalMode = 'FinalMode',
  // Switch to the first character group. (ISO/IEC 9995). Required: false
  GroupFirst = 'GroupFirst',
  // Switch to the last character group. (ISO/IEC 9995). Required: false
  GroupLast = 'GroupLast',
  // Switch to the next character group. (ISO/IEC 9995). Required: false
  GroupNext = 'GroupNext',
  // Switch to the previous character group. (ISO/IEC 9995). Required: false
  GroupPrevious = 'GroupPrevious',
  // The Mode Change key, to toggle between or cycle through input modes of IMEs.. Required: false
  ModeChange = 'ModeChange',
  // The Next Candidate function key.. Required: false
  NextCandidate = 'NextCandidate',
  // The NonConvert ("Don’t Convert") key, to accept current input method sequence without conversion in IMEs.. Required: false
  NonConvert = 'NonConvert',
  // The Previous Candidate function key.. Required: false
  PreviousCandidate = 'PreviousCandidate',
  // The Process key.. Required: false
  Process = 'Process',
  // The Single Candidate function key.. Required: false
  SingleCandidate = 'SingleCandidate'
}
```

### ImeKoreanKeys

```ts
export enum ImeKoreanKeys {
  // The Hangul (Korean characters) Mode key, to toggle between Hangul and English modes.. Required: false
  HangulMode = 'HangulMode',
  // The Hanja (Korean characters) Mode key.. Required: false
  HanjaMode = 'HanjaMode',
  // The Junja (Korean characters) Mode key.. Required: false
  JunjaMode = 'JunjaMode'
}
```

### ImeJapaneseKeys

```ts
export enum ImeJapaneseKeys {
  // The Eisu key. This key may close the IME, but its purpose									is defined by the current IME. (KEYCODE_EISU). Required: false
  Eisu = 'Eisu',
  // The (Half-Width) Characters key.. Required: false
  Hankaku = 'Hankaku',
  // The Hiragana (Japanese Kana characters) key.. Required: false
  Hiragana = 'Hiragana',
  // The Hiragana/Katakana toggle key. (KEYCODE_KATAKANA_HIRAGANA). Required: false
  HiraganaKatakana = 'HiraganaKatakana',
  // The Kana Mode (Kana Lock) key. This key is used to enter									hiragana mode (typically from romaji mode).. Required: false
  KanaMode = 'KanaMode',
  // The Kanji (Japanese name for ideographic characters of Chinese origin) Mode key.									This key is typically used to switch to a hiragana keyboard for
  //									the purpose of converting input into kanji. (KEYCODE_KANA). Required: false
  KanjiMode = 'KanjiMode',
  // The Katakana (Japanese Kana characters) key.. Required: false
  Katakana = 'Katakana',
  // The Roman characters function key.. Required: false
  Romaji = 'Romaji',
  // The Zenkaku (Full-Width) Characters key.. Required: false
  Zenkaku = 'Zenkaku',
  // The Zenkaku/Hankaku (full-width/half-width) toggle key. (KEYCODE_ZENKAKU_HANKAKU). Required: false
  ZenkakuHankaku = 'ZenkakuHankaku'
}
```

### FunctionKeys

```ts
export enum FunctionKeys {
  // The F1 key, a general purpose function key, as index 1.. Required: true
  F1 = 'F1',
  // The F2 key, a general purpose function key, as index 2.. Required: true
  F2 = 'F2',
  // The F3 key, a general purpose function key, as index 3.. Required: true
  F3 = 'F3',
  // The F4 key, a general purpose function key, as index 4.. Required: true
  F4 = 'F4',
  // The F5 key, a general purpose function key, as index 5.. Required: true
  F5 = 'F5',
  // The F6 key, a general purpose function key, as index 6.. Required: true
  F6 = 'F6',
  // The F7 key, a general purpose function key, as index 7.. Required: true
  F7 = 'F7',
  // The F8 key, a general purpose function key, as index 8.. Required: true
  F8 = 'F8',
  // The F9 key, a general purpose function key, as index 9.. Required: true
  F9 = 'F9',
  // The F10 key, a general purpose function key, as index 10.. Required: true
  F10 = 'F10',
  // The F11 key, a general purpose function key, as index 11.. Required: true
  F11 = 'F11',
  // The F12 key, a general purpose function key, as index 12.. Required: true
  F12 = 'F12',
  // General purpose virtual function key, as index 1.. Required: false
  Soft1 = 'Soft1',
  // General purpose virtual function key, as index 2.. Required: false
  Soft2 = 'Soft2',
  // General purpose virtual function key, as index 3.. Required: false
  Soft3 = 'Soft3',
  // General purpose virtual function key, as index 4.. Required: false
  Soft4 = 'Soft4'
}
```

### MultimediaKeys

```ts
export enum MultimediaKeys {
  // Select next (numerically or logically) lower channel. (APPCOMMAND_MEDIA_CHANNEL_DOWN, KEYCODE_CHANNEL_DOWN). Required: false
  ChannelDown = 'ChannelDown',
  // Select next (numerically or logically) higher channel. (APPCOMMAND_MEDIA_CHANNEL_UP, KEYCODE_CHANNEL_UP). Required: false
  ChannelUp = 'ChannelUp',
  // Close the current document or message (Note: This doesn’t close the application). (APPCOMMAND_CLOSE). Required: false
  Close = 'Close',
  // Open an editor to forward the current message. (APPCOMMAND_FORWARD_MAIL). Required: false
  MailForward = 'MailForward',
  // Open an editor to reply to the current message. (APPCOMMAND_REPLY_TO_MAIL). Required: false
  MailReply = 'MailReply',
  // Send the current message. (APPCOMMAND_SEND_MAIL). Required: false
  MailSend = 'MailSend',
  // Close the current media, for example to close a CD or DVD tray. (KEYCODE_MEDIA_CLOSE). Required: false
  MediaClose = 'MediaClose',
  // Initiate or continue forward playback at faster than normal speed, or increase speed if already fast forwarding. (APPCOMMAND_MEDIA_FAST_FORWARD, KEYCODE_MEDIA_FAST_FORWARD). Required: false
  MediaFastForward = 'MediaFastForward',
  // Pause the currently playing media. (APPCOMMAND_MEDIA_PAUSE, KEYCODE_MEDIA_PAUSE)
  //       Media controller devices should use this value rather than "Pause" for their pause keys.. Required: false
  MediaPause = 'MediaPause',
  // Initiate or continue media playback at normal speed, if not currently playing at normal speed. (APPCOMMAND_MEDIA_PLAY, KEYCODE_MEDIA_PLAY). Required: false
  MediaPlay = 'MediaPlay',
  // Toggle media between play and pause states. (APPCOMMAND_MEDIA_PLAY_PAUSE, KEYCODE_MEDIA_PLAY_PAUSE). Required: false
  MediaPlayPause = 'MediaPlayPause',
  // Initiate or resume recording of currently selected media. (APPCOMMAND_MEDIA_RECORD, KEYCODE_MEDIA_RECORD). Required: false
  MediaRecord = 'MediaRecord',
  // Initiate or continue reverse playback at faster than normal speed, or increase speed if already rewinding. (APPCOMMAND_MEDIA_REWIND, KEYCODE_MEDIA_REWIND). Required: false
  MediaRewind = 'MediaRewind',
  // Stop media playing, pausing, forwarding, rewinding, or recording, if not already stopped. (APPCOMMAND_MEDIA_STOP, KEYCODE_MEDIA_STOP). Required: false
  MediaStop = 'MediaStop',
  // Seek to next media or program track. (APPCOMMAND_MEDIA_NEXTTRACK, KEYCODE_MEDIA_NEXT). Required: false
  MediaTrackNext = 'MediaTrackNext',
  // Seek to previous media or program track. (APPCOMMAND_MEDIA_PREVIOUSTRACK, KEYCODE_MEDIA_PREVIOUS). Required: false
  MediaTrackPrevious = 'MediaTrackPrevious',
  // Open a new document or message. (APPCOMMAND_NEW). Required: false
  New = 'New',
  // Open an existing document or message. (APPCOMMAND_OPEN). Required: false
  Open = 'Open',
  // Print the current document or message. (APPCOMMAND_PRINT). Required: false
  Print = 'Print',
  // Save the current document or message. (APPCOMMAND_SAVE). Required: false
  Save = 'Save',
  // Spellcheck the current document or selection. (APPCOMMAND_SPELL_CHECK). Required: false
  SpellCheck = 'SpellCheck'
}
```

### MultimediaNumpadKeys

```ts
export enum MultimediaNumpadKeys {
  // The 11 key found on media numpads that							have buttons from 1 ... 12.. Required: false
  Key11 = 'Key11',
  // The 12 key found on media numpads that							have buttons from 1 ... 12.. Required: false
  Key12 = 'Key12'
}
```

### AudioKeys

```ts
export enum AudioKeys {
  // Adjust audio balance leftward. (VK_AUDIO_BALANCE_LEFT). Required: false
  AudioBalanceLeft = 'AudioBalanceLeft',
  // Adjust audio balance rightward. (VK_AUDIO_BALANCE_RIGHT). Required: false
  AudioBalanceRight = 'AudioBalanceRight',
  // Decrease audio bass boost or cycle down through bass boost states. (APPCOMMAND_BASS_DOWN, VK_BASS_BOOST_DOWN). Required: false
  AudioBassBoostDown = 'AudioBassBoostDown',
  // Toggle bass boost on/off. (APPCOMMAND_BASS_BOOST). Required: false
  AudioBassBoostToggle = 'AudioBassBoostToggle',
  // Increase audio bass boost or cycle up through bass boost states. (APPCOMMAND_BASS_UP, VK_BASS_BOOST_UP). Required: false
  AudioBassBoostUp = 'AudioBassBoostUp',
  // Adjust audio fader towards front. (VK_FADER_FRONT). Required: false
  AudioFaderFront = 'AudioFaderFront',
  // Adjust audio fader towards rear. (VK_FADER_REAR). Required: false
  AudioFaderRear = 'AudioFaderRear',
  // Advance surround audio mode to next available mode. (VK_SURROUND_MODE_NEXT). Required: false
  AudioSurroundModeNext = 'AudioSurroundModeNext',
  // Decrease treble. (APPCOMMAND_TREBLE_DOWN). Required: false
  AudioTrebleDown = 'AudioTrebleDown',
  // Increase treble. (APPCOMMAND_TREBLE_UP). Required: false
  AudioTrebleUp = 'AudioTrebleUp',
  // Decrease audio volume. (APPCOMMAND_VOLUME_DOWN, KEYCODE_VOLUME_DOWN). Required: false
  AudioVolumeDown = 'AudioVolumeDown',
  // Increase audio volume. (APPCOMMAND_VOLUME_UP, KEYCODE_VOLUME_UP). Required: false
  AudioVolumeUp = 'AudioVolumeUp',
  // Toggle between muted state and prior volume level. (APPCOMMAND_VOLUME_MUTE, KEYCODE_VOLUME_MUTE). Required: false
  AudioVolumeMute = 'AudioVolumeMute',
  // Toggle the microphone on/off. (APPCOMMAND_MIC_ON_OFF_TOGGLE). Required: false
  MicrophoneToggle = 'MicrophoneToggle',
  // Decrease microphone volume. (APPCOMMAND_MICROPHONE_VOLUME_DOWN). Required: false
  MicrophoneVolumeDown = 'MicrophoneVolumeDown',
  // Increase microphone volume. (APPCOMMAND_MICROPHONE_VOLUME_UP). Required: false
  MicrophoneVolumeUp = 'MicrophoneVolumeUp',
  // Mute the microphone. (APPCOMMAND_MICROPHONE_VOLUME_MUTE, KEYCODE_MUTE). Required: false
  MicrophoneVolumeMute = 'MicrophoneVolumeMute'
}
```

### SpeechKeys

```ts
export enum SpeechKeys {
  // Show correction list when a word is incorrectly identified. (APPCOMMAND_CORRECTION_LIST). Required: false
  SpeechCorrectionList = 'SpeechCorrectionList',
  // Toggle between dictation mode and command/control mode. (APPCOMMAND_DICTATE_OR_COMMAND_CONTROL_TOGGLE). Required: false
  SpeechInputToggle = 'SpeechInputToggle'
}
```

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

### BrowserKeys

```ts
export enum BrowserKeys {
  // Navigate to previous content or page in current history. (APPCOMMAND_BROWSER_BACKWARD). Required: false
  BrowserBack = 'BrowserBack',
  // Open the list of browser favorites. (APPCOMMAND_BROWSER_FAVORITES). Required: false
  BrowserFavorites = 'BrowserFavorites',
  // Navigate to next content or page in current history. (APPCOMMAND_BROWSER_FORWARD). Required: false
  BrowserForward = 'BrowserForward',
  // Go to the user’s preferred home page. (APPCOMMAND_BROWSER_HOME). Required: false
  BrowserHome = 'BrowserHome',
  // Refresh the current page or content. (APPCOMMAND_BROWSER_REFRESH). Required: false
  BrowserRefresh = 'BrowserRefresh',
  // Call up the user’s preferred search page. (APPCOMMAND_BROWSER_SEARCH). Required: false
  BrowserSearch = 'BrowserSearch',
  // Stop loading the current page or content. (APPCOMMAND_BROWSER_STOP). Required: false
  BrowserStop = 'BrowserStop'
}
```

### MobilePhoneKeys

```ts
export enum MobilePhoneKeys {
  // The Application switch key, which provides a list of recent apps to switch between. (KEYCODE_APP_SWITCH). Required: false
  AppSwitch = 'AppSwitch',
  // The Call key. (KEYCODE_CALL). Required: false
  Call = 'Call',
  // The Camera key. (KEYCODE_CAMERA). Required: false
  Camera = 'Camera',
  // The Camera focus key. (KEYCODE_FOCUS). Required: false
  CameraFocus = 'CameraFocus',
  // The End Call key. (KEYCODE_ENDCALL). Required: false
  EndCall = 'EndCall',
  // The Back key. (KEYCODE_BACK). Required: false
  GoBack = 'GoBack',
  // The Home key, which goes to the phone’s main screen. (KEYCODE_HOME). Required: false
  GoHome = 'GoHome',
  // The Headset Hook key. (KEYCODE_HEADSETHOOK). Required: false
  HeadsetHook = 'HeadsetHook',
  // The Last Number Redial key.. Required: false
  LastNumberRedial = 'LastNumberRedial',
  // The Notification key. (KEYCODE_NOTIFICATION). Required: false
  Notification = 'Notification',
  // Toggle between manner mode state: silent, vibrate, ring, ... (KEYCODE_MANNER_MODE). Required: false
  MannerMode = 'MannerMode',
  // The Voice Dial key.. Required: false
  VoiceDial = 'VoiceDial'
}
```

### TvKeys

```ts
export enum TvKeys {
  // Switch to viewing TV. (KEYCODE_TV). Required: false
  TV = 'TV',
  // TV 3D Mode. (KEYCODE_3D_MODE). Required: false
  TV3DMode = 'TV3DMode',
  // Toggle between antenna and cable input. (KEYCODE_TV_ANTENNA_CABLE). Required: false
  TVAntennaCable = 'TVAntennaCable',
  // Audio description. (KEYCODE_TV_AUDIO_DESCRIPTION). Required: false
  TVAudioDescription = 'TVAudioDescription',
  // Audio description mixing volume down. (KEYCODE_TV_AUDIO_DESCRIPTION_MIX_DOWN). Required: false
  TVAudioDescriptionMixDown = 'TVAudioDescriptionMixDown',
  // Audio description mixing volume up. (KEYCODE_TV_AUDIO_DESCRIPTION_MIX_UP). Required: false
  TVAudioDescriptionMixUp = 'TVAudioDescriptionMixUp',
  // Contents menu. (KEYCODE_TV_CONTENTS_MENU). Required: false
  TVContentsMenu = 'TVContentsMenu',
  // Contents menu. (KEYCODE_TV_DATA_SERVICE). Required: false
  TVDataService = 'TVDataService',
  // Switch the input mode on an external TV. (KEYCODE_TV_INPUT). Required: false
  TVInput = 'TVInput',
  // Switch to component input #1. (KEYCODE_TV_INPUT_COMPONENT_1). Required: false
  TVInputComponent1 = 'TVInputComponent1',
  // Switch to component input #2. (KEYCODE_TV_INPUT_COMPONENT_2). Required: false
  TVInputComponent2 = 'TVInputComponent2',
  // Switch to composite input #1. (KEYCODE_TV_INPUT_COMPOSITE_1). Required: false
  TVInputComposite1 = 'TVInputComposite1',
  // Switch to composite input #2. (KEYCODE_TV_INPUT_COMPOSITE_2). Required: false
  TVInputComposite2 = 'TVInputComposite2',
  // Switch to HDMI input #1. (KEYCODE_TV_INPUT_HDMI_1). Required: false
  TVInputHDMI1 = 'TVInputHDMI1',
  // Switch to HDMI input #2. (KEYCODE_TV_INPUT_HDMI_2). Required: false
  TVInputHDMI2 = 'TVInputHDMI2',
  // Switch to HDMI input #3. (KEYCODE_TV_INPUT_HDMI_3). Required: false
  TVInputHDMI3 = 'TVInputHDMI3',
  // Switch to HDMI input #4. (KEYCODE_TV_INPUT_HDMI_4). Required: false
  TVInputHDMI4 = 'TVInputHDMI4',
  // Switch to VGA input #1. (KEYCODE_TV_INPUT_VGA_1). Required: false
  TVInputVGA1 = 'TVInputVGA1',
  // Media context menu. (KEYCODE_TV_MEDIA_CONTEXT_MENU). Required: false
  TVMediaContext = 'TVMediaContext',
  // Toggle network. (KEYCODE_TV_NETWORK). Required: false
  TVNetwork = 'TVNetwork',
  // Number entry. (KEYCODE_TV_NUMBER_ENTRY). Required: false
  TVNumberEntry = 'TVNumberEntry',
  // Toggle the power on an external TV. (KEYCODE_TV_POWER). Required: false
  TVPower = 'TVPower',
  // Radio. (KEYCODE_TV_RADIO_SERVICE). Required: false
  TVRadioService = 'TVRadioService',
  // Satellite. (KEYCODE_TV_SATELLITE). Required: false
  TVSatellite = 'TVSatellite',
  // Broadcast Satellite. (KEYCODE_TV_SATELLITE_BS). Required: false
  TVSatelliteBS = 'TVSatelliteBS',
  // Communication Satellite. (KEYCODE_TV_SATELLITE_CS). Required: false
  TVSatelliteCS = 'TVSatelliteCS',
  // Toggle between available satellites. (KEYCODE_TV_SATELLITE_SERVICE). Required: false
  TVSatelliteToggle = 'TVSatelliteToggle',
  // Analog Terrestrial. (KEYCODE_TV_TERRESTRIAL_ANALOG). Required: false
  TVTerrestrialAnalog = 'TVTerrestrialAnalog',
  // Digital Terrestrial. (KEYCODE_TV_TERRESTRIAL_DIGITAL). Required: false
  TVTerrestrialDigital = 'TVTerrestrialDigital',
  // Timer programming. (KEYCODE_TV_TIMER_PROGRAMMING). Required: false
  TVTimer = 'TVTimer'
}
```

### MediaControllerKeys

```ts
export enum MediaControllerKeys {
  // Switch the input mode on an external AVR (audio/video receiver). (KEYCODE_AVR_INPUT). Required: false
  AVRInput = 'AVRInput',
  // Toggle the power on an external AVR (audio/video receiver). (KEYCODE_AVR_POWER). Required: false
  AVRPower = 'AVRPower',
  // General purpose color-coded media function key, as index 0 (red). (VK_COLORED_KEY_0, KEYCODE_PROG_RED). Required: false
  ColorF0Red = 'ColorF0Red',
  // General purpose color-coded media function key, as index 1 (green). (VK_COLORED_KEY_1, KEYCODE_PROG_GREEN). Required: false
  ColorF1Green = 'ColorF1Green',
  // General purpose color-coded media function key, as index 2 (yellow). (VK_COLORED_KEY_2, KEYCODE_PROG_YELLOW). Required: false
  ColorF2Yellow = 'ColorF2Yellow',
  // General purpose color-coded media function key, as index 3 (blue). (VK_COLORED_KEY_3, KEYCODE_PROG_BLUE). Required: false
  ColorF3Blue = 'ColorF3Blue',
  // General purpose color-coded media function key, as index 4 (grey). (VK_COLORED_KEY_4). Required: false
  ColorF4Grey = 'ColorF4Grey',
  // General purpose color-coded media function key, as index 5 (brown). (VK_COLORED_KEY_5). Required: false
  ColorF5Brown = 'ColorF5Brown',
  // Toggle the display of Closed Captions. (VK_CC, KEYCODE_CAPTIONS). Required: false
  ClosedCaptionToggle = 'ClosedCaptionToggle',
  // Adjust brightness of device, by toggling between or cycling through states. (VK_DIMMER). Required: false
  Dimmer = 'Dimmer',
  // Swap video sources. (VK_DISPLAY_SWAP). Required: false
  DisplaySwap = 'DisplaySwap',
  // Select Digital Video Rrecorder. (KEYCODE_DVR). Required: false
  DVR = 'DVR',
  // Exit the current application. (VK_EXIT). Required: false
  Exit = 'Exit',
  // Clear program or content stored as favorite 0. (VK_CLEAR_FAVORITE_0). Required: false
  FavoriteClear0 = 'FavoriteClear0',
  // Clear program or content stored as favorite 1. (VK_CLEAR_FAVORITE_1). Required: false
  FavoriteClear1 = 'FavoriteClear1',
  // Clear program or content stored as favorite 2. (VK_CLEAR_FAVORITE_2). Required: false
  FavoriteClear2 = 'FavoriteClear2',
  // Clear program or content stored as favorite 3. (VK_CLEAR_FAVORITE_3). Required: false
  FavoriteClear3 = 'FavoriteClear3',
  // Select (recall) program or content stored as favorite 0. (VK_RECALL_FAVORITE_0). Required: false
  FavoriteRecall0 = 'FavoriteRecall0',
  // Select (recall) program or content stored as favorite 1. (VK_RECALL_FAVORITE_1). Required: false
  FavoriteRecall1 = 'FavoriteRecall1',
  // Select (recall) program or content stored as favorite 2. (VK_RECALL_FAVORITE_2). Required: false
  FavoriteRecall2 = 'FavoriteRecall2',
  // Select (recall) program or content stored as favorite 3. (VK_RECALL_FAVORITE_3). Required: false
  FavoriteRecall3 = 'FavoriteRecall3',
  // Store current program or content as favorite 0. (VK_STORE_FAVORITE_0). Required: false
  FavoriteStore0 = 'FavoriteStore0',
  // Store current program or content as favorite 1. (VK_STORE_FAVORITE_1). Required: false
  FavoriteStore1 = 'FavoriteStore1',
  // Store current program or content as favorite 2. (VK_STORE_FAVORITE_2). Required: false
  FavoriteStore2 = 'FavoriteStore2',
  // Store current program or content as favorite 3. (VK_STORE_FAVORITE_3). Required: false
  FavoriteStore3 = 'FavoriteStore3',
  // Toggle display of program or content guide. (VK_GUIDE, KEYCODE_GUIDE). Required: false
  Guide = 'Guide',
  // If guide is active and displayed, then display next day’s content. (VK_NEXT_DAY). Required: false
  GuideNextDay = 'GuideNextDay',
  // If guide is active and displayed, then display previous day’s content. (VK_PREV_DAY). Required: false
  GuidePreviousDay = 'GuidePreviousDay',
  // Toggle display of information about currently selected context or media. (VK_INFO, KEYCODE_INFO). Required: false
  Info = 'Info',
  // Toggle instant replay. (VK_INSTANT_REPLAY). Required: false
  InstantReplay = 'InstantReplay',
  // Launch linked content, if available and appropriate. (VK_LINK). Required: false
  Link = 'Link',
  // List the current program. (VK_LIST). Required: false
  ListProgram = 'ListProgram',
  // Toggle display listing of currently available live content or programs. (VK_LIVE). Required: false
  LiveContent = 'LiveContent',
  // Lock or unlock current content or program. (VK_LOCK). Required: false
  Lock = 'Lock',
  // Show a list of media applications: audio/video players and image viewers. (VK_APPS)
  //       Do not confuse this key value with the Windows' VK_APPS / VK_CONTEXT_MENU key, which is encoded as "ContextMenu".. Required: false
  MediaApps = 'MediaApps',
  // Audio track key. (KEYCODE_MEDIA_AUDIO_TRACK). Required: false
  MediaAudioTrack = 'MediaAudioTrack',
  // Select previously selected channel or media. (VK_LAST, KEYCODE_LAST_CHANNEL). Required: false
  MediaLast = 'MediaLast',
  // Skip backward to next content or program. (KEYCODE_MEDIA_SKIP_BACKWARD). Required: false
  MediaSkipBackward = 'MediaSkipBackward',
  // Skip forward to next content or program. (VK_SKIP, KEYCODE_MEDIA_SKIP_FORWARD). Required: false
  MediaSkipForward = 'MediaSkipForward',
  // Step backward to next content or program. (KEYCODE_MEDIA_STEP_BACKWARD). Required: false
  MediaStepBackward = 'MediaStepBackward',
  // Step forward to next content or program. (KEYCODE_MEDIA_STEP_FORWARD). Required: false
  MediaStepForward = 'MediaStepForward',
  // Media top menu. (KEYCODE_MEDIA_TOP_MENU). Required: false
  MediaTopMenu = 'MediaTopMenu',
  // Navigate in. (KEYCODE_NAVIGATE_IN). Required: false
  NavigateIn = 'NavigateIn',
  // Navigate to next key. (KEYCODE_NAVIGATE_NEXT). Required: false
  NavigateNext = 'NavigateNext',
  // Navigate out. (KEYCODE_NAVIGATE_OUT). Required: false
  NavigateOut = 'NavigateOut',
  // Navigate to previous key. (KEYCODE_NAVIGATE_PREVIOUS). Required: false
  NavigatePrevious = 'NavigatePrevious',
  // Cycle to next favorite channel (in favorites list). (VK_NEXT_FAVORITE_CHANNEL). Required: false
  NextFavoriteChannel = 'NextFavoriteChannel',
  // Cycle to next user profile (if there are multiple user profiles). (VK_USER). Required: false
  NextUserProfile = 'NextUserProfile',
  // Access on-demand content or programs. (VK_ON_DEMAND). Required: false
  OnDemand = 'OnDemand',
  // Pairing key to pair devices. (KEYCODE_PAIRING). Required: false
  Pairing = 'Pairing',
  // Move picture-in-picture window down. (VK_PINP_DOWN). Required: false
  PinPDown = 'PinPDown',
  // Move picture-in-picture window. (VK_PINP_MOVE). Required: false
  PinPMove = 'PinPMove',
  // Toggle display of picture-in-picture window. (VK_PINP_TOGGLE). Required: false
  PinPToggle = 'PinPToggle',
  // Move picture-in-picture window up. (VK_PINP_UP). Required: false
  PinPUp = 'PinPUp',
  // Decrease media playback speed. (VK_PLAY_SPEED_DOWN). Required: false
  PlaySpeedDown = 'PlaySpeedDown',
  // Reset playback to normal speed. (VK_PLAY_SPEED_RESET). Required: false
  PlaySpeedReset = 'PlaySpeedReset',
  // Increase media playback speed. (VK_PLAY_SPEED_UP). Required: false
  PlaySpeedUp = 'PlaySpeedUp',
  // Toggle random media or content shuffle mode. (VK_RANDOM_TOGGLE). Required: false
  RandomToggle = 'RandomToggle',
  // Not a physical key, but this key code is sent when the remote control battery is low. (VK_RC_LOW_BATTERY). Required: false
  RcLowBattery = 'RcLowBattery',
  // Toggle or cycle between media recording speeds. (VK_RECORD_SPEED_NEXT). Required: false
  RecordSpeedNext = 'RecordSpeedNext',
  // Toggle RF (radio frequency) input bypass mode (pass RF input directly to the RF output). (VK_RF_BYPASS). Required: false
  RfBypass = 'RfBypass',
  // Toggle scan channels mode. (VK_SCAN_CHANNELS_TOGGLE). Required: false
  ScanChannelsToggle = 'ScanChannelsToggle',
  // Advance display screen mode to next available mode. (VK_SCREEN_MODE_NEXT). Required: false
  ScreenModeNext = 'ScreenModeNext',
  // Toggle display of device settings screen. (VK_SETTINGS, KEYCODE_SETTINGS). Required: false
  Settings = 'Settings',
  // Toggle split screen mode. (VK_SPLIT_SCREEN_TOGGLE). Required: false
  SplitScreenToggle = 'SplitScreenToggle',
  // Switch the input mode on an external STB (set top box). (KEYCODE_STB_INPUT). Required: false
  STBInput = 'STBInput',
  // Toggle the power on an external STB (set top box). (KEYCODE_STB_POWER). Required: false
  STBPower = 'STBPower',
  // Toggle display of subtitles, if available. (VK_SUBTITLE). Required: false
  Subtitle = 'Subtitle',
  // Toggle display of teletext, if available (VK_TELETEXT, KEYCODE_TV_TELETEXT).. Required: false
  Teletext = 'Teletext',
  // Advance video mode to next available mode. (VK_VIDEO_MODE_NEXT). Required: false
  VideoModeNext = 'VideoModeNext',
  // Cause device to identify itself in some manner, e.g., audibly or visibly. (VK_WINK). Required: false
  Wink = 'Wink',
  // Toggle between full-screen and scaled content, or alter magnification level. (VK_ZOOM, KEYCODE_TV_ZOOM_MODE). Required: false
  ZoomToggle = 'ZoomToggle'
}
```

### MediaControllerDupKeys

```ts
export enum MediaControllerDupKeys {
  // Decrease audio volume. (VK_VOLUME_DOWN). Required: false
  AudioVolumeDown = 'AudioVolumeDown',
  // Increase audio volume. (VK_VOLUME_UP). Required: false
  AudioVolumeUp = 'AudioVolumeUp',
  // Toggle between muted state and prior volume level. (VK_VOLUME_MUTE). Required: false
  AudioVolumeMute = 'AudioVolumeMute',
  // Navigate to previous content or page in current history. (VK_BACK). Required: false
  BrowserBack = 'BrowserBack',
  // Navigate to next content or page in current history. (VK_FORWARD). Required: false
  BrowserForward = 'BrowserForward',
  // Select next (numerically or logically) lower channel. (VK_CHANNEL_DOWN). Required: false
  ChannelDown = 'ChannelDown',
  // Select next (numerically or logically) higher channel. (VK_CHANNEL_UP). Required: false
  ChannelUp = 'ChannelUp',
  // Toggle display of the on-screen menu. (VK_MENU). Required: true
  ContextMenu = 'ContextMenu',
  // Toggle removable media to eject (open) and insert (close) state. (VK_EJECT_TOGGLE). Required: false
  Eject = 'Eject',
  // The End key, used with keyboard entry to go to the end of content. (VK_GO_TO_END). Required: true
  End = 'End',
  // The Enter key, to activate current selection or accept current input. (VK_SELECT). Required: true
  Enter = 'Enter',
  // The Home key, used with keyboard entry, to go to start of content. (VK_GO_TO_START). Required: true
  Home = 'Home',
  // Initiate or continue forward playback at faster than normal speed, or increase speed if already fast forwarding. (VK_FAST_FWD). Required: false
  MediaFastForward = 'MediaFastForward',
  // Initiate or continue media playback at normal speed, if not currently playing at normal speed. (VK_PLAY). Required: false
  MediaPlay = 'MediaPlay',
  // Toggle media between play and pause states. (VK_PLAY_PAUSE). Required: false
  MediaPlayPause = 'MediaPlayPause',
  // Initiate or resume recording of currently selected media. (VK_RECORD). Required: false
  MediaRecord = 'MediaRecord',
  // Initiate or continue reverse playback at faster than normal speed, or increase speed if already rewinding. (VK_REWIND). Required: false
  MediaRewind = 'MediaRewind',
  // Stop media playing, pausing, forwarding, rewinding, or recording, if not already stopped. (VK_STOP). Required: false
  MediaStop = 'MediaStop',
  // Seek to next media or program track. (VK_TRACK_NEXT). Required: false
  MediaNextTrack = 'MediaNextTrack',
  // Pause the currently playing media. (VK_PAUSE). Required: false
  MediaPause = 'MediaPause',
  // Seek to previous media or program track. (VK_TRACK_PREV). Required: false
  MediaPreviousTrack = 'MediaPreviousTrack',
  // Toggle power state. (VK_POWER). Required: false
  Power = 'Power',
  // This key value is used when an implementations is unable to identify another key value, due to either hardware, platform, or software constraints. (VK_UNDEFINED). Required: true
  Unidentified = 'Unidentified'
}
```
