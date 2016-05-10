import GameDataTypeEnum from './game-data-type-enum';
import {D2P} from './game-data-file-accessor';

const NULL_IDENTIFIER = -1431655766;

export default class GameDataField {
  /**
   * @param {string} name
   */
  constructor(name) {
    this._name = name;
  }

  /**
   * return {string}
   */
  get name() {
    return this._name;
  }

  /**
   * @param {string} value
   */
  set name(value) {
    this._name = value;
  }

  /**
   * Read field type
   *
   * @param {ByteArray} data
   */
  readType(key, data) {
    this.readData = this.getReadMethod(key, data.readInt(), data);
  }

  /**
   * Get read method
   *
   * @param {number} type
   * @param {ByteArray} data
   * @return {Function}
   */
  getReadMethod(key, type, data) {
    switch (type) {
      case GameDataTypeEnum.INT:
        return this.readInteger;
      case GameDataTypeEnum.BOOLEAN:
        return this.readBoolean;
      case GameDataTypeEnum.STRING:
        return this.readString;
      case GameDataTypeEnum.NUMBER:
        return this.readNumber;
      case GameDataTypeEnum.I18N:
        return this.readI18n;
      case GameDataTypeEnum.UINT:
        return this.readUnsignedInteger;
      case GameDataTypeEnum.VECTOR:
        if (!this._innerReadMethods) {
          this._innerReadMethods = [];
          this._innerTypeNames = [];
        }
        this._innerTypeNames.push(data.readUTF());
        this._innerReadMethods.unshift(this.getReadMethod(key, data.readInt(), data));
        return this.readVector;
      default:
        if (type > 0) {
          return this.readObject;
        }
        throw new Error("Unknown type '" + type + "'.");
    }
  }

  readVector(data, key, type = 0, innerReadMethods) {
    var _loc4_ = data.readInt();
    var _loc6_ = [];
    var _loc7_ = 0;
    innerReadMethods = innerReadMethods || this._innerReadMethods;
    while (_loc7_ < _loc4_) {
      _loc6_.push(innerReadMethods[type](data, key, type + 1, innerReadMethods));
      _loc7_++;
    }
    return _loc6_;
  }

  readObject(data, key) {
    var _loc4_ = data.readInt();
    if (_loc4_ === NULL_IDENTIFIER) {
      return null;
    }
    var _loc5_ = D2P.getClassDefinition(key, _loc4_);
    return _loc5_.read(key, data);
  }

  readInteger(data) {
    return data.readInt();
  }

  readBoolean(data) {
    return data.readBoolean();
  }

  readString(data) {
    var _loc4_ = data.readUTF();
    if (_loc4_ === "null") {
      _loc4_ = null;
    }
    return _loc4_;
  }

  readNumber(data) {
    return data.readDouble();
  }

  readI18n(data) {
    return data.readInt();
  }

  readUnsignedInteger(data) {
    return data.readUnsignedInt();
  }
}
