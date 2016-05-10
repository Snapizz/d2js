# d2js [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> common lib for dofus 2.0

## Installation

```sh
$ npm install --save d2js
```

## Usage

```js
var d2Js = require('d2js');

```
## Classes

<dl>
<dt><a href="#GameDataFileAccessor">GameDataFileAccessor</a></dt>
<dd></dd>
<dt><a href="#I18nFileAccessor">I18nFileAccessor</a></dt>
<dd></dd>
</dl>

<a name="GameDataFileAccessor"></a>

## GameDataFileAccessor
**Kind**: global class  
**Export**:   
<a name="new_GameDataFileAccessor_new"></a>

### new GameDataFileAccessor()
D2p reader

<a name="name"></a>

## name
return {string}

**Kind**: global variable  

<a name="counter"></a>

## counter
Getter for counter

**Kind**: global variable  
**Read only**: true  
<a name="init"></a>

## init(filename)
Initialize data from file

**Kind**: global function  

| Param | Description |
| --- | --- |
| filename | file path |

<a name="initFromIDataInput"></a>

## initFromIDataInput(data)
Initialize data from ByteArray

**Kind**: global function  

| Param | Description |
| --- | --- |
| data | (description) |

<a name="getClassDefinition"></a>

## getClassDefinition(idx) ⇒
Get class definistion

**Kind**: global function  
**Returns**: (description)  

| Param | Description |
| --- | --- |
| idx | (description) |

<a name="getObject"></a>

## getObject(index) ⇒ <code>object</code>
Get object by index

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | of object |

<a name="getObjects"></a>

## getObjects(filter, [limit], map) ⇒ <code>Array</code>
get objects from innerData

**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| filter | <code>function</code> |  | 
| [limit] | <code>number</code> | <code>0</code> | 
| map | <code>function</code> |  | 

<a name="map"></a>

## map(cb) ⇒ <code>Array</code>
map item from getObjects

**Kind**: global function  

| Param | Type |
| --- | --- |
| cb | <code>function</code> | 

<a name="I18nFileAccessor"></a>

## I18nFileAccessor
**Kind**: global class  
**Export**:   

<a name="init"></a>

## init()
Initalize I18nFileAccessor and read file

**Kind**: global function  
<a name="getOrderIndex"></a>

## getOrderIndex(idx1) ⇒ <code>number</code>
Get order index

**Kind**: global function  

| Param | Type |
| --- | --- |
| idx1 | <code>number</code> | 

<a name="getText"></a>

## getText(idx) ⇒ <code>string</code>
Get text

**Kind**: global function  

| Param | Type |
| --- | --- |
| idx | <code>number</code> | 

<a name="getUnDiacriticalText"></a>

## getUnDiacriticalText(idx) ⇒ <code>string</code>
Get undiacritical text

**Kind**: global function  

| Param | Type |
| --- | --- |
| idx | <code>number</code> | 

<a name="hasText"></a>

## hasText(idx) ⇒ <code>boolean</code>
Verify if text exist

**Kind**: global function  

| Param | Type |
| --- | --- |
| idx | <code>number</code> | 

<a name="getNamedText"></a>

## getNamedText(key) ⇒ <code>string</code>
Get named text

**Kind**: global function  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 

<a name="hasNamedText"></a>

## hasNamedText(key) ⇒ <code>boolean</code>
Verify if named text exists

**Kind**: global function  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 

<a name="useDirectBuffer"></a>

## useDirectBuffer(enableDirectBuffer)
Use direct buff

**Kind**: global function  

| Param | Type |
| --- | --- |
| enableDirectBuffer | <code>boolean</code> | 

<a name="getTexts"></a>

## getTexts(filter) ⇒ <code>Array</code>
Get all text

**Kind**: global function  

| Param | Type |
| --- | --- |
| filter | <code>function</code> | 

## License

MIT © [Snapiz]()


[npm-image]: https://badge.fury.io/js/d2js.svg
[npm-url]: https://npmjs.org/package/d2js
[travis-image]: https://travis-ci.org/Snapizz/d2js.svg?branch=master
[travis-url]: https://travis-ci.org/Snapizz/d2js
[daviddm-image]: https://david-dm.org/Snapizz/d2js.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Snapizz/d2js
[coveralls-image]: https://coveralls.io/repos/github/Snapizz/d2js/badge.svg
[coveralls-url]: https://coveralls.io/github/Snapizz/d2js
