
export class GlobalComponent {

  static get username(): string {
    return this._username;
  }

  static set username(value: string) {
    this._username = value;
  }

  private static _username: string = '';


}
