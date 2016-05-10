# d2js [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> common lib for dofus 2.0

## Installation

```sh
$ npm install --save d2js
```

## Usage

```js
var d2js = require('d2js') // :: es5
// or import {D2I, D2P} from 'd2js' :: es6
d2js.D2I.register({key: 'file1', path: 'file1.d2i'}, {key: 'file2', path: 'file2.d2i'} [,...]) // I18nFileAccessor
d2js.D2P.register({key: 'file1', path: 'file1.d2o'}, {key: 'file2', path: 'file2.d2o'} [,...]) // GameDataFileAccessor

console.log(D2P.getObjects('file1', null, 5)); // display objects limit 5

```
## Classes

<dl>
<dt><a href="#GameDataFileAccessor">GameDataFileAccessor</a></dt>
<dd></dd>
<dt><a href="#I18nFileAccessor">I18nFileAccessor</a></dt>
<dd></dd>
</dl>

## Members

<dl>
<dt><a href="#name">name</a></dt>
<dd><p>name getter</p>
</dd>
<dt><a href="#name">name</a></dt>
<dd><p>name setter</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#register">register()</a></dt>
<dd><p>Register all d2p files</p>
</dd>
<dt><a href="#getClassDefinition">getClassDefinition(key, idx)</a> ⇒ <code>Object</code></dt>
<dd><p>Get class definition by index</p>
</dd>
<dt><a href="#getlength">getlength(key)</a> ⇒ <code>number</code></dt>
<dd><p>Get d2p items length</p>
</dd>
<dt><a href="#getObject">getObject(key, idx)</a> ⇒ <code>Object</code></dt>
<dd><p>Get object by index</p>
</dd>
<dt><a href="#getObjects">getObjects(key, filter, [limit], map)</a> ⇒ <code>Array.&lt;Object&gt;</code></dt>
<dd><p>Get objects from d2p file</p>
</dd>
<dt><a href="#map">map(key, cb)</a> ⇒ <code>Array.&lt;Object&gt;</code></dt>
<dd><p>Mapping of objects as you wanted</p>
</dd>
<dt><a href="#register">register(...entry)</a></dt>
<dd><p>Register d2i files</p>
</dd>
<dt><a href="#overrideId">overrideId(key, idx1, idx2)</a></dt>
<dd><p>Override id</p>
</dd>
<dt><a href="#getOrderIndex">getOrderIndex(key, idx)</a> ⇒ <code>number</code></dt>
<dd><p>Get order index</p>
</dd>
<dt><a href="#getText">getText(key, idx)</a> ⇒ <code>string</code></dt>
<dd><p>Get text</p>
</dd>
<dt><a href="#getUnDiacriticalText">getUnDiacriticalText(key, idx)</a> ⇒ <code>string</code></dt>
<dd><p>Get undiacritical text</p>
</dd>
<dt><a href="#hasText">hasText(idx)</a> ⇒ <code>boolean</code></dt>
<dd><p>Verify if text exist</p>
</dd>
<dt><a href="#getNamedText">getNamedText(key, name)</a> ⇒ <code>string</code></dt>
<dd><p>Get named text</p>
</dd>
<dt><a href="#hasNamedText">hasNamedText(key, name)</a> ⇒ <code>boolean</code></dt>
<dd><p>Verify if named text exists</p>
</dd>
<dt><a href="#useDirectBuffer">useDirectBuffer(key, enableDirectBuffer)</a></dt>
<dd><p>Use direct buff</p>
</dd>
<dt><a href="#getTexts">getTexts(key, filter)</a> ⇒ <code>Array</code></dt>
<dd><p>Get all text</p>
</dd>
</dl>

<a name="GameDataFileAccessor"></a>

## GameDataFileAccessor
**Kind**: global class  
**Export**:   
<a name="new_GameDataFileAccessor_new"></a>

### new GameDataFileAccessor()
Allow user to read d2p files

<a name="I18nFileAccessor"></a>

## I18nFileAccessor
**Kind**: global class  
**Export**:   
<a name="new_I18nFileAccessor_new"></a>

### new I18nFileAccessor()
Allow user to read d2i files

<a name="name"></a>

## name
name getter

**Kind**: global variable  
<a name="name"></a>

## name
name setter

**Kind**: global variable  
<a name="register"></a>

## register()
Register all d2p files

**Kind**: global function  
<a name="getClassDefinition"></a>

## getClassDefinition(key, idx) ⇒ <code>Object</code>
Get class definition by index

**Kind**: global function  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 
| idx | <code>number</code> | 

<a name="getlength"></a>

## getlength(key) ⇒ <code>number</code>
Get d2p items length

**Kind**: global function  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 

<a name="getObject"></a>

## getObject(key, idx) ⇒ <code>Object</code>
Get object by index

**Kind**: global function  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 
| idx | <code>number</code> | 

<a name="getObjects"></a>

## getObjects(key, filter, [limit], map) ⇒ <code>Array.&lt;Object&gt;</code>
Get objects from d2p file

**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| key | <code>stirng</code> |  | 
| filter | <code>function</code> |  | 
| [limit] | <code>number</code> | <code>0</code> | 
| map | <code>function</code> |  | 

<a name="map"></a>

## map(key, cb) ⇒ <code>Array.&lt;Object&gt;</code>
Mapping of objects as you wanted

**Kind**: global function  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 
| cb | <code>function</code> | 

<a name="register"></a>

## register(...entry)
Register d2i files

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| ...entry | <code>Object</code> |  |
| entry.key | <code>string</code> | used when you call get methods |
| entry.path | <code>string</code> | full path of d2i file |

<a name="overrideId"></a>

## overrideId(key, idx1, idx2)
Override id

**Kind**: global function  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 
| idx1 | <code>number</code> | 
| idx2 | <code>number</code> | 

<a name="getOrderIndex"></a>

## getOrderIndex(key, idx) ⇒ <code>number</code>
Get order index

**Kind**: global function  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 
| idx | <code>number</code> | 

<a name="getText"></a>

## getText(key, idx) ⇒ <code>string</code>
Get text

**Kind**: global function  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 
| idx | <code>number</code> | 

<a name="getUnDiacriticalText"></a>

## getUnDiacriticalText(key, idx) ⇒ <code>string</code>
Get undiacritical text

**Kind**: global function  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 
| idx | <code>number</code> | 

<a name="hasText"></a>

## hasText(idx) ⇒ <code>boolean</code>
Verify if text exist

**Kind**: global function  

| Param | Type |
| --- | --- |
| idx | <code>number</code> | 

<a name="getNamedText"></a>

## getNamedText(key, name) ⇒ <code>string</code>
Get named text

**Kind**: global function  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 
| name | <code>string</code> | 

<a name="hasNamedText"></a>

## hasNamedText(key, name) ⇒ <code>boolean</code>
Verify if named text exists

**Kind**: global function  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 
| name | <code>string</code> | 

<a name="useDirectBuffer"></a>

## useDirectBuffer(key, enableDirectBuffer)
Use direct buff

**Kind**: global function  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 
| enableDirectBuffer | <code>boolean</code> | 

<a name="getTexts"></a>

## getTexts(key, filter) ⇒ <code>Array</code>
Get all text

**Kind**: global function  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 
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
