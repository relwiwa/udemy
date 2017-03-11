import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {
  private altBackground: boolean = false;

  setBackground(isAlt: boolean) {
    this.altBackground = isAlt;
  }

  isAltBackground() {
    return this.altBackground;
  }
}