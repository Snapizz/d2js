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
</dl>

## Members

<dl>
<dt><a href="#name">name</a></dt>
<dd><p>return {string}</p>
</dd>
<dt><a href="#name">name</a></dt>
<dd></dd>
<dt><a href="#counter">counter</a></dt>
<dd><p>Getter for counter</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#GameDataTypeEnum">GameDataTypeEnum</a> : <code>enum</code></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#read">read(data)</a></dt>
<dd></dd>
<dt><a href="#addField">addField(classname)</a></dt>
<dd></dd>
<dt><a href="#readType">readType(data)</a></dt>
<dd><p>Read field type</p>
</dd>
<dt><a href="#getReadMethod">getReadMethod(type, data)</a> ⇒ <code>function</code></dt>
<dd><p>Get read method</p>
</dd>
<dt><a href="#readVector">readVector(data, type)</a></dt>
<dd></dd>
<dt><a href="#readObject">readObject(data)</a></dt>
<dd></dd>
<dt><a href="#readInteger">readInteger(data)</a></dt>
<dd></dd>
<dt><a href="#readBoolean">readBoolean(data)</a></dt>
<dd></dd>
<dt><a href="#readString">readString(data)</a></dt>
<dd></dd>
<dt><a href="#readNumber">readNumber(data)</a></dt>
<dd></dd>
<dt><a href="#readI18n">readI18n(data)</a></dt>
<dd></dd>
<dt><a href="#readUnsignedInteger">readUnsignedInteger(data)</a></dt>
<dd></dd>
<dt><a href="#init">init(filename)</a></dt>
<dd><p>Initialize data from file</p>
</dd>
<dt><a href="#initFromIDataInput">initFromIDataInput(data)</a></dt>
<dd><p>Initialize data from ByteArray</p>
</dd>
<dt><a href="#getClassDefinition">getClassDefinition(idx)</a> ⇒</dt>
<dd><p>Get class definistion</p>
</dd>
<dt><a href="#getObject">getObject(index)</a> ⇒ <code>object</code></dt>
<dd><p>Get object by index</p>
</dd>
<dt><a href="#getObjects">getObjects(filter, [limit], map)</a> ⇒ <code>Array</code></dt>
<dd><p>get objects from innerData</p>
</dd>
<dt><a href="#map">map(cb)</a> ⇒ <code>Array</code></dt>
<dd><p>map item from getObjects</p>
</dd>
<dt><a href="#readClassDefinition">readClassDefinition(idx, data)</a></dt>
<dd><p>Read class definition from data</p>
</dd>
<dt><a href="#init">init()</a></dt>
<dd><p>Initalize I18nFileAccessor and read file</p>
</dd>
<dt><a href="#overrideId">overrideId()</a></dt>
<dd><p>Override id</p>
</dd>
<dt><a href="#getOrderIndex">getOrderIndex(idx1)</a> ⇒ <code>number</code></dt>
<dd><p>Get order index</p>
</dd>
<dt><a href="#getText">getText(idx)</a> ⇒ <code>string</code></dt>
<dd><p>Get text</p>
</dd>
<dt><a href="#getUnDiacriticalText">getUnDiacriticalText(idx)</a> ⇒ <code>string</code></dt>
<dd><p>Get undiacritical text</p>
</dd>
<dt><a href="#hasText">hasText(idx)</a> ⇒ <code>boolean</code></dt>
<dd><p>Verify if text exist</p>
</dd>
<dt><a href="#getNamedText">getNamedText(key)</a> ⇒ <code>string</code></dt>
<dd><p>Get named text</p>
</dd>
<dt><a href="#hasNamedText">hasNamedText(key)</a> ⇒ <code>boolean</code></dt>
<dd><p>Verify if named text exists</p>
</dd>
<dt><a href="#useDirectBuffer">useDirectBuffer(enableDirectBuffer)</a></dt>
<dd><p>Use direct buff</p>
</dd>
<dt><a href="#getTexts">getTexts(filter)</a> ⇒ <code>Array</code></dt>
<dd><p>Get all text</p>
</dd>
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
<a name="name"></a>

## name
**Kind**: global variable  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="counter"></a>

## counter
Getter for counter

**Kind**: global variable  
**Read only**: true  
<a name="GameDataTypeEnum"></a>

## GameDataTypeEnum : <code>enum</code>
**Kind**: global constant  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| INT | <code>number</code> | <code>-1</code> | 
| BOOLEAN | <code>number</code> | <code>-2</code> | 
| STRING | <code>number</code> | <code>-3</code> | 
| NUMBER | <code>number</code> | <code>-4</code> | 
| I18N | <code>number</code> | <code>-5</code> | 
| UINT | <code>number</code> | <code>-6</code> | 
| VECTOR | <code>number</code> | <code>-99</code> | 

<a name="read"></a>

## read(data)
**Kind**: global function  

| Param | Type |
| --- | --- |
| data | <code>ByteArray</code> | 

<a name="addField"></a>

## addField(classname)
**Kind**: global function  

| Param | Type |
| --- | --- |
| classname | <code>string</code> | 

<a name="readType"></a>

## readType(data)
Read field type

**Kind**: global function  

| Param | Type |
| --- | --- |
| data | <code>ByteArray</code> | 

<a name="getReadMethod"></a>

## getReadMethod(type, data) ⇒ <code>function</code>
Get read method

**Kind**: global function  

| Param | Type |
| --- | --- |
| type | <code>number</code> | 
| data | <code>ByteArray</code> | 

<a name="readVector"></a>

## readVector(data, type)
**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>ByteArray</code> |  |  |
| type | <code>number</code> | <code>0</code> | return {object} |

<a name="readObject"></a>

## readObject(data)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>ByteArray</code> | return {object} |

<a name="readInteger"></a>

## readInteger(data)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>ByteArray</code> | return {object} |

<a name="readBoolean"></a>

## readBoolean(data)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>ByteArray</code> | return {object} |

<a name="readString"></a>

## readString(data)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>ByteArray</code> | return {object} |

<a name="readNumber"></a>

## readNumber(data)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>ByteArray</code> | return {object} |

<a name="readI18n"></a>

## readI18n(data)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>ByteArray</code> | return {object} |

<a name="readUnsignedInteger"></a>

## readUnsignedInteger(data)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>ByteArray</code> | return {object} |

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

<a name="readClassDefinition"></a>

## readClassDefinition(idx, data)
Read class definition from data

**Kind**: global function  

| Param | Type |
| --- | --- |
| idx | <code>number</code> | 
| data | <code>bytearray2</code> | 

<a name="init"></a>

## init()
Initalize I18nFileAccessor and read file

**Kind**: global function  
<a name="overrideId"></a>

## overrideId()
Override id

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
