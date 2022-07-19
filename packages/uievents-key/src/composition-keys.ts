// Copyright (c) 2022 KrestUI
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// Warning: Auto-Generated Code below. Do not modify.

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
