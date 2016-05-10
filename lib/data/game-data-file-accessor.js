import ByteArray from 'bytearray2';
import fs from 'fs';
import GameDataClassDefinition from './game-data-class-definition';

const ANKAMA_SIGNED_FILE_HEADER = "AKSF";

/**
 * Allow user to read d2p files
 *
 * @export
 * @class GameDataFileAccessor
 */
export default class GameDataFileAccessor {
  /**
   * Register all d2p files
   */
  register() {
    if (!this._container) {
      this._container = {};
    }
    for (var i = 0; i < arguments.length; i++) {
      this.createEntry(arguments[i].key, arguments[i].path);
    }
  }

  /**
   * Create d2p entry from filename
   *
   * @private
   * @param {string}
   * @param {string}
   */
  createEntry(key, filename) {
    var entry = {};
    this._container[key] = entry;
    entry._stream = new ByteArray(fs.readFileSync(filename));
    entry._streamStartIndex = 7;
    var _loc8_ = 0;
    var _loc9_ = 0;
    var _loc14_ = 0;
    var _loc17_ = 0;
    entry._indexes = {};
    entry._length = 0;
    entry._classes = {};
    var _loc4_ = 0;
    var _loc5_ = entry._stream.readMultiByte(3, "ASCII");
    if (_loc5_ !== "D2O") {
      entry._stream.reset();
      try {
        _loc5_ = entry._stream.readUTF();
      } catch (e) {
      }
      if (_loc5_ !== ANKAMA_SIGNED_FILE_HEADER) {
        throw new Error("Malformated game data file.");
      }
      entry._stream.readShort();
      _loc17_ = entry._stream.readInt();
      entry._stream.position += _loc17_;
      _loc4_ = entry._stream.position;
      entry._streamStartIndex = _loc4_ + 7;
      _loc5_ = entry._stream.readMultiByte(3, "ASCII");
      if (_loc5_ !== "D2O") {
        throw new Error("Malformated game data file.");
      }
    }
    var _loc6_ = entry._stream.readInt();
    entry._stream.position = _loc4_ + _loc6_;
    var _loc7_ = entry._stream.readInt();
    var _loc11_ = 0;
    while (_loc11_ < _loc7_) {
      _loc8_ = entry._stream.readInt();
      _loc9_ = entry._stream.readInt();
      entry._indexes[_loc8_] = _loc4_ + _loc9_;
      entry._length++;
      _loc11_ += 8;
    }
    var _loc13_ = entry._stream.readInt();
    var _loc15_ = 0;
    while (_loc15_ < _loc13_) {
      _loc14_ = entry._stream.readInt();
      this.readClassDefinition(key, _loc14_, entry._stream);
      _loc15_++;
    }
  }

  /**
   * Get class definition by index
   *
   * @param {string}
   * @param {number}
   * @returns {Object}
   */
  getClassDefinition(key, idx) {
    return this._container[key]._classes[idx];
  }

  /**
   * Get d2p items length
   *
   * @param {string}
   * @returns {number}
   */
  getlength(key) {
    return this._container[key]._length;
  }

  /**
   * Get object by index
   *
   * @param {string}
   * @param {number}
   * @returns {Object}
   */
  getObject(key, idx) {
    if (!this._container[key]._indexes) {
      return null;
    }
    var _loc3_ = this._container[key]._indexes[idx];
    if (!_loc3_) {
      return null;
    }
    this._container[key]._stream.position = _loc3_;
    return this._container[key]._classes[this._container[key]._stream.readInt()].read(key, this._container[key]._stream);
  }

  /**
   * Get objects from d2p file
   *
   * @param {stirng}
   * @param {function}
   * @param {number} [limit=0]
   * @param {function}
   * @returns {Array<Object>}
   */
  getObjects(key, filter, limit = 0, map) {
    if (!this._container[key]._length) {
      return null;
    }
    this._container[key]._stream.position = this._container[key]._streamStartIndex;
    var result = [];
    for (var i = 0; i < this._container[key]._length; i++) {
      var item = this._container[key]._classes[this._container[key]._stream.readInt()].read(key, this._container[key]._stream);
      if (!filter || filter(item)) {
        result.push(map ? map(item) : item);
      }

      if (limit !== 0 && result.length >= limit) {
        break;
      }
    }
    return result;
  }

  /**
   * Mapping of objects as you wanted
   *
   * @param {string}
   * @param cb {function}
   * @returns {Array<Object>}
   */
  map(key, cb) {
    return this.getObjects(key, null, 0, cb);
  }

  /**
   * Read class definition from d2p file
   *
   * @private
   * @param {string}
   * @param {number}
   * @param {bytearray2}
   */
  readClassDefinition(key, idx, data) {
    var _loc8_ = null;
    var _loc4_ = data.readUTF();
    var _loc5_ = data.readUTF();
    var classDefinition = new GameDataClassDefinition(_loc5_, _loc4_);
    var _loc7_ = data.readInt();
    var _loc10_ = 0;
    while (_loc10_ < _loc7_) {
      _loc8_ = data.readUTF();
      classDefinition.addField(key, _loc8_, data);
      _loc10_++;
    }
    this._container[key]._classes[idx] = classDefinition;
  }
}

export const D2P = new GameDataFileAccessor();
