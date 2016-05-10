import GameDataField from './game-data-field';

export default class GameDataClassDefinition {

  constructor(ns, classname) {
    this._class = ns + '.' + classname;
    this._fields = [];
  }

  get fields() {
    return this._fields;
  }

  read(key, data) {
    var _definition = {};
    this._fields.forEach(function (field) {
      _definition[field.name] = field.readData(data, key);
    });

    return _definition;
  }

  addField(key, classname, data) {
    var field = new GameDataField(classname);
    field.readType(key, data);
    this._fields.push(field);
  }
}
