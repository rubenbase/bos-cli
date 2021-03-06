import ruFrontGen from './index';

describe('generator utils', () => {
  test('create default', () => {
    expect(
      ruFrontGen.create({
        name: 'hello'
      })
    ).toEqual('create-react-app hello');
  });

  test('create with arguments', () => {
    const list = {
      name: 'my-app',
      '--scripts-version': 'custom-react-scripts',
      '--verbose': true,
      '--use-npm': true
    };

    expect(ruFrontGen.create(list)).toEqual(
      'create-react-app my-app --scripts-version custom-react-scripts --use-npm --verbose'
    );
  });
});
