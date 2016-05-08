import GameDataFileAccessor from '../../lib/d2p/game-data-file-accessor';

describe('GameDataFileAccessor', function () {
  var filename = 'test/fixtures/d2p/Mounts.d2o';
  GameDataFileAccessor.init(filename);
  console.log(GameDataFileAccessor.getObjects());
  it('should have objects!', function () {
    expect(GameDataFileAccessor.counter).toBeGreaterThan(0);
  });
});
