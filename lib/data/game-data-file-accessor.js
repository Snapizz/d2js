import ByteArray from 'bytearray2';
import fs from 'fs';
import GameDataClassDefinition from './game-data-class-definition';

const ANKAMA_SIGNED_FILE_HEADER = "AKSF";

export default class GameDataFileAccessor {
  init(filename) {
    this._stream = new ByteArray(fs.readFileSync(filename));
    this._streamStartIndex = 7;
    this.initFromIDataInput(this._stream);
  }

  /**
   * @param {ByteArray} data
   */
  initFromIDataInput(data) {
    var _loc8_ = 0;
    var _loc9_ = 0;
    var _loc14_ = 0;
    var _loc17_ = 0;
    this._indexes = {};
    this._counter = 0;
    this._classes = {};
    var _loc4_ = 0;
    var _loc5_ = data.readMultiByte(3, "ASCII");
    if (_loc5_ !== "D2O") {
      data.reset();
      try {
        _loc5_ = data.readUTF();
      } catch (e) {
      }
      if (_loc5_ !== ANKAMA_SIGNED_FILE_HEADER) {
        throw new Error("Malformated game data file.");
      }
      data.readShort();
      _loc17_ = data.readInt();
      data.position += _loc17_;
      _loc4_ = data.position;
      this._streamStartIndex = _loc4_ + 7;
      _loc5_ = data.readMultiByte(3, "ASCII");
      if (_loc5_ !== "D2O") {
        throw new Error("Malformated game data file.");
      }
    }
    var _loc6_ = data.readInt();
    data.position = _loc4_ + _loc6_;
    var _loc7_ = data.readInt();
    var _loc11_ = 0;
    while (_loc11_ < _loc7_) {
      _loc8_ = data.readInt();
      _loc9_ = data.readInt();
      this._indexes[_loc8_] = _loc4_ + _loc9_;
      this._counter++;
      _loc11_ += 8;
    }
    var _loc13_ = data.readInt();
    var _loc15_ = 0;
    while (_loc15_ < _loc13_) {
      _loc14_ = data.readInt();
      this.readClassDefinition(_loc14_, data);
      _loc15_++;
    }

    if (data.bytesAvailable) {
      // this._gameDataProcessor[filename] = new GameDataProcess(data);
    }
  }

  // getDataProcessor(param1): GameDataProcess {
  //   return this._gameDataProcessor[param1];
  // }

  getClassDefinition(idx) {
    return this._classes[idx];
  }

  get counter() {
    return this._counter;
  }

  getObject(idx) {
    if (!this._indexes) {
      return null;
    }
    var _loc3_ = this._indexes[idx];
    if (!_loc3_) {
      return null;
    }
    this._stream.position = _loc3_;
    return this._classes[this._stream.readInt()].read(this._stream);
  }

  getObjects(filter, limit = 0, map) {
    if (!this._counter) {
      return null;
    }
    this._stream.position = this._streamStartIndex;
    var result = [];
    for (var i = 0; i < this.counter; i++) {
      var item = this._classes[this._stream.readInt()].read(this._stream);
      if (!filter || filter(item)) {
        result.push(map ? map(item) : item);
      }

      if (limit !== 0 && result.length >= limit) {
        break;
      }
    }
    return result;
  }

  map(cb) {
    return this.getObjects(null, 0, cb);
  }

  readClassDefinition(param1, param2) {
    var _loc8_ = null;
    var _loc4_ = param2.readUTF();
    var _loc5_ = param2.readUTF();
    var classDefinition = new GameDataClassDefinition(_loc5_, _loc4_);
    var _loc7_ = param2.readInt();
    var _loc10_ = 0;
    while (_loc10_ < _loc7_) {
      _loc8_ = param2.readUTF();
      classDefinition.addField(_loc8_, param2);
      _loc10_++;
    }
    this._classes[param1] = classDefinition;
  }
}
