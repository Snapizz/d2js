import {D2i} from '../../lib/';

describe('D2i', function () {
  var filename = 'test/fixtures/data/i18n_fr.d2i';
  D2i.init(filename);
  it('should have _stream!', function () {
    expect(D2i._stream).toBeDefined();
  });
  it('should have _unDiacriticalIndex!', function () {
    expect(D2i._unDiacriticalIndex).toBeDefined();
  });
  it('should have _indexes!', function () {
    expect(D2i._indexes).toBeDefined();
  });
  it('should have _textIndexes!', function () {
    expect(D2i._textIndexes).toBeDefined();
  });
  it('should have _textIndexesOverride!', function () {
    expect(D2i._textIndexesOverride).toBeDefined();
  });
  it('should have _textSortIndex!', function () {
    expect(D2i._textSortIndex).toBeDefined();
  });
  it('should have _textCount!', function () {
    expect(D2i._textCount).toBeDefined();
    expect(D2i._textCount).toBeGreaterThan(0);
  });
  it('should override id!', function () {
    expect(D2i.overrideId).toBeDefined();
  });
  it('should get order index!', function () {
    expect(D2i.getOrderIndex).toBeDefined();
  });
  it('should get text!', function () {
    expect(D2i.getText).toBeDefined();
  });
  it('should get undiacritical text!', function () {
    expect(D2i.getUnDiacriticalText).toBeDefined();
  });
  it('should verify if text exists!', function () {
    expect(D2i.hasText).toBeDefined();
  });
  it('should get named text!', function () {
    expect(D2i.getNamedText).toBeDefined();
  });
  it('should verify if named text exists!', function () {
    expect(D2i.hasNamedText).toBeDefined();
  });
  it('should use direct buffer!', function () {
    expect(D2i.useDirectBuffer).toBeDefined();
  });
  it('should get texts!', function () {
    expect(D2i.getTexts(null, 5).length).toEqual(5);
    expect(D2i.getTexts((e) => e.text.indexOf('Dragodinde') > -1 && e.text.length < 40, 1)[0].text.indexOf('Dragodinde')).not.toEqual(-1);
  });
});
