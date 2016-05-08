import GameDataField from './game-data-field';

export default class GameDataClassDefinition {
  /**
   * @param {string} ns
   * @param {string} classname
   */
  constructor(ns, classname) {
    this._class = ns + '.' + classname;
    this._fields = [];
  }

  get fields() {
    return this._fields;
  }

  /**
   * @param {ByteArray} data
   */
  read(data) {
    var _definition = {};
    this._fields.forEach(function (field) {
      _definition[field.name] = field.readData(data);
    });

    return _definition;
  }

  /**
  * @param {string} classname
  */
  addField(classname, data) {
    var field = new GameDataField(classname);
    field.readType(data);
    this._fields.push(field);
  }
}
