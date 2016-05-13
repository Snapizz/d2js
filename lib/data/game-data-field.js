import GameDataTypeEnum from './game-data-type-enum';
import {D2O} from './game-data-file-accessor';

const NULL_IDENTIFIER = -1431655766;

/**
 * Field of Class definition
 *
 * @private
 * @class GameDataField
 */
export default class GameDataField {
  /**
   * Creates an instance of GameDataField.
   *
   * @param {string}
   */
  constructor(name) {
    this._name = name;
  }
  /**
   * name getter
   */
  get name() {
    return this._name;
  }
  /**
   * name setter
   */
  set name(value) {
    this._name = value;
  }
  /**
   * Read type of field
   *
   * @private
   * @param {string}
   * @param {bytearray2}
   */
  readType(key, data) {
    this.readData = this.getReadMethod(key, data.readInt(), data);
  }
  /**
   * Read method
   *
   * @private
   * @param {string}
   * @param {GameDataTypeEnum}
   * @param {bytearray2}
   * @returns {Function}
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

  /**
   * Read list
   *
   * @private
   * @param {bytearray2}
   * @param {string}
   * @param {number} [type=0]
   * @param innerReadMethods {Function}
   * @returns {Array<Object>}
   */
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

  /**
   * Read Object
   *
   * @private
   * @param {bytearray2}
   * @param {string}
   * @returns {Object}
   */
  readObject(data, key) {
    var _loc4_ = data.readInt();
    if (_loc4_ === NULL_IDENTIFIER) {
      return null;
    }
    var _loc5_ = D2O.getClassDefinition(key, _loc4_);
    return _loc5_.read(key, data);
  }

  /**
   * Read Integer
   *
   * @private
   * @param {bytearray2}
   * @returns {Object}
   */
  readInteger(data) {
    return data.readInt();
  }

  /**
   * Read BOOLEAN
   *
   * @private
   * @param {bytearray2}
   * @returns {Object}
   */
  readBoolean(data) {
    return data.readBoolean();
  }

  /**
   * Read String
   *
   * @private
   * @param {bytearray2}
   * @returns {Object}
   */
  readString(data) {
    var _loc4_ = data.readUTF();
    if (_loc4_ === "null") {
      _loc4_ = null;
    }
    return _loc4_;
  }

  /**
   * Read Number
   *
   * @private
   * @param {bytearray2}
   * @returns {Object}
   */
  readNumber(data) {
    return data.readDouble();
  }

  /**
   * ReadI18n ID
   *
   * @private
   * @param {bytearray2}
   * @returns {Object}
   */
  readI18n(data) {
    return data.readInt();
  }

  /**
   * Read Unsigned integer
   *
   * @private
   * @param {bytearray2}
   * @returns {Object}
   */
  readUnsignedInteger(data) {
    return data.readUnsignedInt();
  }
}
