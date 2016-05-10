import GameDataField from './game-data-field';

/**
 * Class definition
 *
 * @private
 * @class GameDataClassDefinition
 */
export default class GameDataClassDefinition {

  /**
   * Creates an instance of GameDataClassDefinition.
   *
   * @param {string}
   * @param {string}
   */
  constructor(ns, classname) {
    this._class = ns + '.' + classname;
    this._fields = [];
  }

  /**
   * Fields getter
   *
   * @private
   * @readonly
   */
  get fields() {
    return this._fields;
  }

  /**
   * Read from data
   *
   * @private
   * @param {string}
   * @param {bytearray2}
   * @returns {Object}
   */
  read(key, data) {
    var _definition = {};
    this._fields.forEach(function (field) {
      _definition[field.name] = field.readData(data, key);
    });

    return _definition;
  }

  /**
   * Add filed to this class definition
   *
   * @private
   * @param {string}
   * @param {string}
   * @param {bytearray2}
   */
  addField(key, classname, data) {
    var field = new GameDataField(classname);
    field.readType(key, data);
    this._fields.push(field);
  }
}
