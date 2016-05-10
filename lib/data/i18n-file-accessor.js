import ByteArray from 'bytearray2';
import fs from 'fs';

export default class I18nFileAccessor {

  /**
   * Create entry
   *
   * @param {string}
   * @returns {Object}
   */
  createEntry(filename) {
    let entry = {};
    entry._directBuffer = null;
    entry._stream = new ByteArray(fs.readFileSync(filename));
    entry._textIndexes = {};
    entry._indexes = {};
    entry._textIndexesOverride = {};
    entry._textSortIndex = {};
    entry._unDiacriticalIndex = {};
    entry._textCount = 0;
    entry._stream.position = entry._stream.readInt();

    let m = entry._stream.readInt();
    let i = 0;
    let key = -1;
    let value = -1;
    let isNotValue = false;

    while (i < m) {
      key = entry._stream.readInt();
      isNotValue = entry._stream.readBoolean();
      value = entry._stream.readInt();
      entry._indexes[key] = value;
      if (isNotValue) {
        i += 4;
        value = entry._stream.readInt();
      }
      entry._unDiacriticalIndex[key] = value;
      i += 9;
    }

    m = entry._stream.readInt();

    let position = 0;

    while (m > 0) {
      position = entry._stream.position;
      key = entry._stream.readUTF();
      value = entry._stream.readInt();
      entry._textCount++;
      entry._textIndexes[key] = value;
      m -= (entry._stream.position - position);
    }

    m = entry._stream.readInt();
    i = 0;

    while (m > 0) {
      position = entry._stream.position;
      entry._textSortIndex[entry._stream.readInt()] = ++i;
      m -= (entry._stream.position - position);
    }

    return entry;
  }

  /**
   * Register d2i files
   *
   * @param {...Object} entry
   * @param {string} entry.key - used when you call get methods
   * @param {string} entry.path - full path of d2i file
   */
  register() {
    if (!this._container) {
      this._container = {};
    }
    for (var i = 0; i < arguments.length; i++) {
      this._container[arguments[i].key] = this.createEntry(arguments[i].path);
    }
  }

  /**
   * Override id
   *
   * @param {string}
   * @param {number}
   * @param {number}
   */
  overrideId(key, idx1, idx2) {
    this._container[key]._indexes[idx1] = this._container[key]._indexes[idx2];
    this._container[key]._unDiacriticalIndex[idx1] = this._container[key]._unDiacriticalIndex[idx2];
  }

  /**
   * Get order index
   *
   * @param {string}
   * @param {number}
   * @return {number}
   */
  getOrderIndex(key, idx) {
    return this._container[key]._textSortIndex[idx];
  }

  /**
   * Get text
   *
   * @param {string}
   * @param {number}
   * @return {string}
   */
  getText(key, idx) {
    if (!this._container[key]._indexes) {
      return null;
    }
    var position = this._container[key]._indexes[idx];
    if (!position) {
      return null;
    }
    if (this._container[key]._directBuffer === null) {
      this._container[key]._stream.position = position;
      return this._container[key]._stream.readUTF();
    }
    this._container[key]._directBuffer.position = position;
    return this._container[key]._directBuffer.readUTF();
  }

  /**
   * Get undiacritical text
   *
   * @param {string}
   * @param {number}
   * @return {string}
   */
  getUnDiacriticalText(key, idx) {
    if (!this._container[key]._unDiacriticalIndex) {
      return null;
    }
    var position = this._container[key]._unDiacriticalIndex[idx];
    if (!position) {
      return null;
    }
    if (this._container[key]._directBuffer === null) {
      this._container[key]._stream.position = position;
      return this._container[key]._stream.readUTF();
    }
    this._container[key]._directBuffer.position = position;
    return this._container[key]._directBuffer.readUTF();
  }

  /**
   * Verify if text exist
   *
   * @param {number} idx
   * @return {boolean}
   */
  hasText(key, idx) {
    return Boolean(this._container[key]._indexes) && Boolean(this._container[key]._indexes[idx]);
  }

  /**
   * Get named text
   *
   * @param {string}
   * @param {string}
   * @return {string}
   */
  getNamedText(key, name) {
    if (!this._container[key]._textIndexes) {
      return null;
    }
    if (this._container[key]._textIndexesOverride[name]) {
      key = this._container[key]._textIndexesOverride[name];
    }
    var position = this._container[key]._textIndexes[name];
    if (!position) {
      return null;
    }
    this._container[key]._stream.position = position;
    return this._container[key]._stream.readUTF();
  }

  /**
   * Verify if named text exists
   *
   * @param {string}
   * @param {string}
   * @return {boolean}
   */
  hasNamedText(key, name) {
    return Boolean(this._container[key]._textIndexes) && Boolean(this._container[key]._textIndexes[name]);
  }

  /**
   * Use direct buff
   *
   * @param {string}
   * @param {boolean}
   */
  useDirectBuffer(key, enableDirectBuffer) {
    if (!enableDirectBuffer) {
      this._container[key]._directBuffer = null;
      return;
    }
    this._container[key]._directBuffer = new ByteArray();
    this._container[key]._stream.position = 0;
    this._container[key]._stream.readBytes(this._container[key]._directBuffer);
  }

  /**
   * Get all text
   *
   * @param {string}
   * @param {function}
   * @return {Array}
   */
  getTexts(key, filter, limit = 0) {
    var keys = Object.keys(this._container[key]._indexes);
    var result = [];
    for (var i = 0; i < keys.length; i++) {
      var item = {
        id: keys[i],
        text: this.getText(key, keys[i])
      };
      if (!filter || filter(item)) {
        result.push(item);
      }

      if (limit !== 0 && result.length >= limit) {
        break;
      }
    }

    return result;
  }
}

export const D2I = new I18nFileAccessor();
