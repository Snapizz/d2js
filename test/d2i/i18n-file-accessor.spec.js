import I18nFileAccessor from '../../lib/d2i/i18n-file-accessor';

describe('I18nFileAccessor', function () {
  var filename = 'test//fixtures/d2i/i18n_fr.d2i';
  var d2i = new I18nFileAccessor(filename);
  d2i.init();
  it('should have filename!', function () {
    expect(d2i.filename).toEqual(filename);
  });
  it('should have _stream!', function () {
    expect(d2i._stream).toBeDefined();
  });
  it('should have _unDiacriticalIndex!', function () {
    expect(d2i._unDiacriticalIndex).toBeDefined();
  });
  it('should have _indexes!', function () {
    expect(d2i._indexes).toBeDefined();
  });
  it('should have _textIndexes!', function () {
    expect(d2i._textIndexes).toBeDefined();
  });
  it('should have _textIndexesOverride!', function () {
    expect(d2i._textIndexesOverride).toBeDefined();
  });
  it('should have _textSortIndex!', function () {
    expect(d2i._textSortIndex).toBeDefined();
  });
  it('should have _textCount!', function () {
    expect(d2i._textCount).toBeDefined();
    expect(d2i._textCount).toBeGreaterThan(0);
  });
});
