import {D2I} from '../../lib/data';

describe('D2I', function () {
  D2I.register({key: 'fr', path: 'test/fixtures/data/i18n_fr.d2i'});
  D2I.register({key: 'en', path: 'test/fixtures/data/i18n_en.d2i'});
  it('should have _stream!', function () {
    expect(D2I._container['fr']._stream).toBeDefined();
    expect(D2I._container['en']._stream).toBeDefined();
  });
  it('should have _unDiacriticalIndex!', function () {
    expect(D2I._container['fr']._unDiacriticalIndex).toBeDefined();
    expect(D2I._container['en']._unDiacriticalIndex).toBeDefined();
  });
  it('should have _indexes!', function () {
    expect(D2I._container['fr']._indexes).toBeDefined();
    expect(D2I._container['en']._indexes).toBeDefined();
  });
  it('should have _textIndexes!', function () {
    expect(D2I._container['fr']._textIndexes).toBeDefined();
    expect(D2I._container['en']._textIndexes).toBeDefined();
  });
  it('should have _textIndexesOverride!', function () {
    expect(D2I._container['fr']._textIndexesOverride).toBeDefined();
    expect(D2I._container['en']._textIndexesOverride).toBeDefined();
  });
  it('should have _textSortIndex!', function () {
    expect(D2I._container['fr']._textSortIndex).toBeDefined();
    expect(D2I._container['en']._textSortIndex).toBeDefined();
  });
  it('should have _textCount!', function () {
    expect(D2I._container['fr']._textCount).toBeDefined();
    expect(D2I._container['fr']._textCount).toBeGreaterThan(0);
    expect(D2I._container['en']._textCount).toBeDefined();
    expect(D2I._container['en']._textCount).toEqual(D2I._container['fr']._textCount);
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
    expect(D2I.getTexts('fr', null, 5).length).toEqual(5);
    expect(D2I.getTexts('fr', (e) => e.text.indexOf('Dragodinde') > -1 && e.text.length < 40, 1)[0].text.indexOf('Dragodinde')).not.toEqual(-1);
  });
});
