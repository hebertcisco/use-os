import useOs from '../index';

describe('useOs', () => {
  test('should toBeDefined the useOs', () => {
    expect(useOs.name).toBeDefined();
  });
});
