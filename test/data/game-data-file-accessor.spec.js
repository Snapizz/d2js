import {D2I, D2P} from '../../lib/data';

describe('D2P', function () {
  D2P.register(
    { key: 'mounts', path: 'test/fixtures/data/Mounts.d2o' },
    { key: 'dungeons', path: 'test/fixtures/data/Dungeons.d2o' },
    { key: 'items', path: 'test/fixtures/data/Items.d2o' },
    { key: 'itemSets', path: 'test/fixtures/data/ItemSets.d2o' }
  );
  it('should have objects!', function () {
    expect(D2P._container['mounts']._length).toBeGreaterThan(0);
    expect(D2P._container['dungeons']._length).toBeGreaterThan(0);
    expect(D2P._container['items']._length).toBeGreaterThan(0);
    expect(D2P._container['itemSets']._length).toBeGreaterThan(0);
  });
  it('should get object!', function () {
    var mount = D2P.getObject('mounts', 41);
    expect(mount).toBeDefined();
    expect(mount.nameId).toEqual(59093);
  });
  it('should get objects!', function () {
    var mounts = D2P.getObjects('mounts', null, 25);
    expect(mounts.length).toEqual(25);
    expect(mounts[24].id).toEqual(41);
    expect(mounts[24].nameId).toEqual(59093);
  });
  it('should map!', function () {
    var mounts = D2P.map('mounts', (e) => D2I.getText('fr', e.nameId));
    var dungeons = D2P.map('dungeons', (e) => D2I.getText('fr', e.nameId));
    var items = D2P.map('items', (e) => D2I.getText('fr', e.nameId));
    var itemSets = D2P.map('itemSets', (e) => D2I.getText('fr', e.nameId));

    expect(mounts[24]).toEqual('Dragodinde Amande et Pourpre');
    expect(dungeons[0]).toEqual('Donjon des Bouftous');
    expect(items[5]).toEqual('Puissante Epée d\'Alle');
    expect(itemSets[58]).toEqual('Panoplie du Piou Bleu');
  });
});
