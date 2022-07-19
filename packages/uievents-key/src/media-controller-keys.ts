// Copyright (c) 2022 KrestUI
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// Warning: Auto-Generated Code below. Do not modify.

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
