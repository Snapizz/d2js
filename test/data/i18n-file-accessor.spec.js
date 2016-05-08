import {D2I} from '../../lib/data';

describe('D2I', function () {
  var filename = 'test/fixtures/data/i18n_fr.d2i';
  D2I.init(filename);
  it('should have _stream!', function () {
    expect(D2I._stream).toBeDefined();
  });
  it('should have _unDiacriticalIndex!', function () {
    expect(D2I._unDiacriticalIndex).toBeDefined();
  });
  it('should have _indexes!', function () {
    expect(D2I._indexes).toBeDefined();
  });
  it('should have _textIndexes!', function () {
    expect(D2I._textIndexes).toBeDefined();
  });
  it('should have _textIndexesOverride!', function () {
    expect(D2I._textIndexesOverride).toBeDefined();
  });
  it('should have _textSortIndex!', function () {
    expect(D2I._textSortIndex).toBeDefined();
  });
  it('should have _textCount!', function () {
    expect(D2I._textCount).toBeDefined();
    expect(D2I._textCount).toBeGreaterThan(0);
  });
  it('should override id!', function () {
    expect(D2I.overrideId).toBeDefined();
  });
  it('should get order index!', function () {
    expect(D2I.getOrderIndex).toBeDefined();
  });
  it('should get text!', function () {
    expect(D2I.getText).toBeDefined();
  });
  it('should get undiacritical text!', function () {
    expect(D2I.getUnDiacriticalText).toBeDefined();
  });
  it('should verify if text exists!', function () {
    expect(D2I.hasText).toBeDefined();
  });
  it('should get named text!', function () {
    expect(D2I.getNamedText).toBeDefined();
  });
  it('should verify if named text exists!', function () {
    expect(D2I.hasNamedText).toBeDefined();
  });
  it('should use direct buffer!', function () {
    expect(D2I.useDirectBuffer).toBeDefined();
  });
  it('should get texts!', function () {
    expect(D2I.getTexts(null, 5).length).toEqual(5);
    expect(D2I.getTexts((e) => e.text.indexOf('Dragodinde') > -1 && e.text.length < 40, 1)[0].text.indexOf('Dragodinde')).not.toEqual(-1);
  });
});
