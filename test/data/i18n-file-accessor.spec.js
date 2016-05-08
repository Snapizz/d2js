import I18nFileAccessor from '../../lib/data/i18n-file-accessor';

describe('I18nFileAccessor', function () {
  var filename = 'test/fixtures/data/i18n_fr.d2i';
  I18nFileAccessor.init(filename);
  it('should have _stream!', function () {
    expect(I18nFileAccessor._stream).toBeDefined();
  });
  it('should have _unDiacriticalIndex!', function () {
    expect(I18nFileAccessor._unDiacriticalIndex).toBeDefined();
  });
  it('should have _indexes!', function () {
    expect(I18nFileAccessor._indexes).toBeDefined();
  });
  it('should have _textIndexes!', function () {
    expect(I18nFileAccessor._textIndexes).toBeDefined();
  });
  it('should have _textIndexesOverride!', function () {
    expect(I18nFileAccessor._textIndexesOverride).toBeDefined();
  });
  it('should have _textSortIndex!', function () {
    expect(I18nFileAccessor._textSortIndex).toBeDefined();
  });
  it('should have _textCount!', function () {
    expect(I18nFileAccessor._textCount).toBeDefined();
    expect(I18nFileAccessor._textCount).toBeGreaterThan(0);
  });
  it('should override id!', function () {
    expect(I18nFileAccessor.overrideId).toBeDefined();
  });
  it('should get order index!', function () {
    expect(I18nFileAccessor.getOrderIndex).toBeDefined();
  });
  it('should get text!', function () {
    expect(I18nFileAccessor.getText).toBeDefined();
  });
  it('should get undiacritical text!', function () {
    expect(I18nFileAccessor.getUnDiacriticalText).toBeDefined();
  });
  it('should verify if text exists!', function () {
    expect(I18nFileAccessor.hasText).toBeDefined();
  });
  it('should get named text!', function () {
    expect(I18nFileAccessor.getNamedText).toBeDefined();
  });
  it('should verify if named text exists!', function () {
    expect(I18nFileAccessor.hasNamedText).toBeDefined();
  });
  it('should use direct buffer!', function () {
    expect(I18nFileAccessor.useDirectBuffer).toBeDefined();
  });
  it('should get texts!', function () {
    expect(I18nFileAccessor.getTexts(null, 5).length).toEqual(5);
    expect(I18nFileAccessor.getTexts((e) => e.text.indexOf('Dragodinde') > -1 && e.text.length < 40, 1)[0].text.indexOf('Dragodinde')).not.toEqual(-1);
  });
});
