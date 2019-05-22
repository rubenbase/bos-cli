import { getHttpsGitURL } from './string-utils';

describe('string utils', () => {
  test('getHttpsGitURL', () => {
    const url1 = 'example';

    expect(getHttpsGitURL(url1)).toEqual('example');
  });
});
