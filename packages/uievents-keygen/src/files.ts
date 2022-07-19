// Copyright (c) 2022 KrestUI
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import axios from 'axios';
import { readFileSync, writeFile, statSync } from 'fs';

const URL = 'https://raw.githubusercontent.com/w3c/uievents-key/gh-pages/index.html';
async function downlad_w3c_html(url: string): Promise<string> {
  try {
    const { data } = await axios.get<string>(url);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Axios error ${error.message}`);
    } else {
      throw new Error(`Unexpected error ${error}`);
    }
  }
}

function writeContents(filename: string, data: string) {
  writeFile(filename, data, 'utf8', (err) => {
    if (err) {
      console.log(`Error writing to ${filename} - ${err.message}`);
    }
  });
}

function is_file_recent(filename: string, numberOfDays: number): boolean {
  try {
    const stats = statSync(filename);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export async function get_file_contents(filename: string): Promise<string> {
  let data = '';
  if (!is_file_recent(filename, 3)) {
    console.log(`Downloading html from remote github`);
    data = await downlad_w3c_html(URL);
    writeContents(filename, data);
  } else {
    console.log(`File exists already. Not downloading hence.`);
    data = readFileSync(filename).toString();
  }
  return data;
}
