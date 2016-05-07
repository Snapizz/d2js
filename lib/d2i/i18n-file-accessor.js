import ByteArray from 'bytearray2';
import fs from 'fs';

export default class I18nFileAccessor {

  /**
   * @param {string} filename
   */
  constructor(filename) {
    this._filename = filename;
  }

  /**
   * Get filename
   *
   * @return {string}
   */
  get filename() {
    return this._filename;
  }

  /**
   * Initalize I18nFileAccessor and read file
   */
  init() {
    this._stream = new ByteArray(fs.readFileSync(this.filename));
    this._textIndexes = {};
    this._indexes = {};
    this._textIndexesOverride = {};
    this._textSortIndex = {};
    this._unDiacriticalIndex = {};
    this._textCount = 0;
    this._stream.position = this._stream.readInt();

    let m = this._stream.readInt();
    let i = 0;
    let key = -1;
    let value = -1;
    let isNotValue = false;

    while (i < m) {
      key = this._stream.readInt();
      isNotValue = this._stream.readBoolean();
      value = this._stream.readInt();
      this._indexes[key] = value;
      if (isNotValue) {
        i += 4;
        value = this._stream.readInt();
      }
      this._unDiacriticalIndex[key] = value;
      i += 9;
    }

    m = this._stream.readInt();

    let position = 0;

    while (m > 0) {
      position = this._stream.position;
      key = this._stream.readUTF();
      value = this._stream.readInt();
      this._textCount++;
      this._textIndexes[key] = value;
      m -= (this._stream.position - position);
    }

    m = this._stream.readInt();
    i = 0;

    while (m > 0) {
      position = this._stream.position;
      this._textSortIndex[this._stream.readInt()] = ++i;
      m -= (this._stream.position - position);
    }
  }
}
