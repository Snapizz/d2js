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
    this._directBuffer = null;
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

  /**
   * Override id
   */
  overrideId(idx1, idx2) {
    this._indexes[idx1] = this._indexes[idx2];
    this._unDiacriticalIndex[idx1] = this._unDiacriticalIndex[idx2];
  }

  /**
   * Get order index
   *
   * @param {number} idx1
   * @return {number}
   */
  getOrderIndex(idx) {
    return this._textSortIndex[idx];
  }

  /**
   * Get text
   *
   * @param {number} idx
   * @return {string}
   */
  getText(idx) {
    if (!this._indexes) {
      return null;
    }
    var position = this._indexes[idx];
    if (!position) {
      return null;
    }
    if (this._directBuffer === null) {
      this._stream.position = position;
      return this._stream.readUTF();
    }
    this._directBuffer.position = position;
    return this._directBuffer.readUTF();
  }

  /**
   * Get undiacritical text
   *
   * @param {number} idx
   * @return {string}
   */
  getUnDiacriticalText(idx) {
    if (!this._unDiacriticalIndex) {
      return null;
    }
    var position = this._unDiacriticalIndex[idx];
    if (!position) {
      return null;
    }
    if (this._directBuffer === null) {
      this._stream.position = position;
      return this._stream.readUTF();
    }
    this._directBuffer.position = position;
    return this._directBuffer.readUTF();
  }

  /**
   * Verify if text exist
   *
   * @param {number} idx
   * @return {boolean}
   */
  hasText(idx) {
    return Boolean(this._indexes) && Boolean(this._indexes[idx]);
  }

  /**
   * Get named text
   *
   * @param {string} key
   * @return {string}
   */
  getNamedText(key) {
    if (!this._textIndexes) {
      return null;
    }
    if (this._textIndexesOverride[key]) {
      key = this._textIndexesOverride[key];
    }
    var position = this._textIndexes[key];
    if (!position) {
      return null;
    }
    this._stream.position = position;
    return this._stream.readUTF();
  }

  /**
   * Verify if named text exists
   *
   * @param {string} key
   * @return {boolean}
   */
  hasNamedText(key) {
    return Boolean(this._textIndexes) && Boolean(this._textIndexes[key]);
  }

  /**
   * Use direct buff
   *
   * @param {boolean} enableDirectBuffer
   */
  useDirectBuffer(enableDirectBuffer) {
    if (!enableDirectBuffer) {
      this._directBuffer = null;
      return;
    }
    this._directBuffer = new ByteArray();
    this._stream.position = 0;
    this._stream.readBytes(this._directBuffer);
  }
  
  /**
   * Get all text
   * 
   * @param {() => boolean}
   * @return {Array}
   */
  getAllText(filter) {
    var keys = Object.keys(this._indexes);
    var result = [];
    for (var i = 0; i < keys.length; i++) {
      var item = { id: keys[i], text: this.getText(keys[i]) };
      if (filter(item)) {
        result.push(item);
      }
    }
    
    return result;
  }
}
