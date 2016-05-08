import GameDataFileAccessor from '../../lib/d2p/game-data-file-accessor';
import I18nFileAccessor from '../../lib/d2i/i18n-file-accessor';

describe('GameDataFileAccessor', function () {
  var filename = 'test/fixtures/d2p/Mounts.d2o';
  GameDataFileAccessor.init(filename);
  it('should have objects!', function () {
    expect(GameDataFileAccessor.counter).toBeGreaterThan(0);
  });
  it('should get object!', function () {
    var mount = GameDataFileAccessor.getObject(41);
    expect(mount).toBeDefined();
    expect(mount.nameId).toEqual(59093);
  });
  it('should get objects!', function () {
    var mounts = GameDataFileAccessor.getObjects(null, 25);
    expect(mounts.length).toEqual(25);
    expect(mounts[24].id).toEqual(41);
    expect(mounts[24].nameId).toEqual(59093);
  });
  it('should map!', function () {
    var mounts = GameDataFileAccessor.map((e) => I18nFileAccessor.getText(e.nameId));
    expect(mounts[24]).toEqual('Dragodinde Amande et Pourpre');
  });
});
