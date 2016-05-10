import {D2I, D2P} from '../../lib/data';

describe('D2P', function () {
  var filename = 'test/fixtures/data/Mounts.d2o';
  D2P.init(filename);
  it('should have objects!', function () {
    expect(D2P.counter).toBeGreaterThan(0);
  });
  it('should get object!', function () {
    var mount = D2P.getObject(41);
    expect(mount).toBeDefined();
    expect(mount.nameId).toEqual(59093);
  });
  it('should get objects!', function () {
    var mounts = D2P.getObjects(null, 25);
    expect(mounts.length).toEqual(25);
    expect(mounts[24].id).toEqual(41);
    expect(mounts[24].nameId).toEqual(59093);
  });
  it('should map!', function () {
    var mounts = D2P.map((e) => D2I.getText('fr', e.nameId));
    expect(mounts[24]).toEqual('Dragodinde Amande et Pourpre');
  });
});
