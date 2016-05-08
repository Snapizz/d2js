import {D2i, D2p} from '../../lib/data';

describe('D2p', function () {
  var filename = 'test/fixtures/data/Mounts.d2o';
  D2p.init(filename);
  it('should have objects!', function () {
    expect(D2p.counter).toBeGreaterThan(0);
  });
  it('should get object!', function () {
    var mount = D2p.getObject(41);
    expect(mount).toBeDefined();
    expect(mount.nameId).toEqual(59093);
  });
  it('should get objects!', function () {
    var mounts = D2p.getObjects(null, 25);
    expect(mounts.length).toEqual(25);
    expect(mounts[24].id).toEqual(41);
    expect(mounts[24].nameId).toEqual(59093);
  });
  it('should map!', function () {
    var mounts = D2p.map((e) => D2i.getText(e.nameId));
    expect(mounts[24]).toEqual('Dragodinde Amande et Pourpre');
  });
});
