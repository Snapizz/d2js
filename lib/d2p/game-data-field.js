import GameDataTypeEnum from './game-data-type-enum';
import GameDataFileAccessor from './game-data-file-accessor';

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
  readType(data) {
    this.readData = this.getReadMethod(data.readInt(), data);
  }

  /**
   * Get read method
   *
   * @param {number} type
   * @param {ByteArray} data
   * @return {Function}
   */
  getReadMethod(type, data) {
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
        this._innerReadMethods.unshift(this.getReadMethod(data.readInt(), data));
        return this.readVector;
      default:
        if (type > 0) {
          return this.readObject;
        }
        throw new Error("Unknown type '" + type + "'.");
    }
  }

  /**
   * @param {ByteArray} data
   * @param {number} type
   * return {object}
   */
  readVector(data, type = 0, innerReadMethods) {
    var _loc4_ = data.readInt();
    var _loc6_ = [];
    var _loc7_ = 0;
    innerReadMethods = innerReadMethods || this._innerReadMethods;
    while (_loc7_ < _loc4_) {
      _loc6_.push(innerReadMethods[type](data, type + 1, innerReadMethods));
      _loc7_++;
    }
    return _loc6_;
  }

  /**
   * @param {ByteArray} data
   * return {object}
   */
  readObject(data) {
    var _loc4_ = data.readInt();
    if (_loc4_ === NULL_IDENTIFIER) {
      return null;
    }
    var _loc5_ = GameDataFileAccessor.getClassDefinition(_loc4_);
    return _loc5_.read(data);
  }

  /**
   * @param {ByteArray} data
   * return {object}
   */
  readInteger(data) {
    return data.readInt();
  }

  /**
   * @param {ByteArray} data
   * return {object}
   */
  readBoolean(data) {
    return data.readBoolean();
  }

  /**
   * @param {ByteArray} data
   * return {object}
   */
  readString(data) {
    var _loc4_ = data.readUTF();
    if (_loc4_ === "null") {
      _loc4_ = null;
    }
    return _loc4_;
  }

  /**
   * @param {ByteArray} data
   * return {object}
   */
  readNumber(data) {
    return data.readDouble();
  }

  /**
   * @param {ByteArray} data
   * return {object}
   */
  readI18n(data) {
    return data.readInt();
  }

  /**
   * @param {ByteArray} data
   * return {object}
   */
  readUnsignedInteger(data) {
    return data.readUnsignedInt();
  }
}
