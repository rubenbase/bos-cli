import { compactJoin, getDefaultOrder, processArguments } from '../../utils';
import compact from 'lodash/compact';

import FIELD_TYPES from '../../field-types';

const CLI_NAME = 'create-react-app';

const ARGUMENTS = {
  SCRIPTS_VERSION: {
    name: 'Scripts version',
    key: '--scripts-version',
    default: 'react-scripts',
    type: FIELD_TYPES.TEXT
  },
  USE_NPM: {
    name: 'Use npm',
    key: '--use-npm',
    type: FIELD_TYPES.TOGGLE,
    flag: true
  },
  VERBOSE: {
    name: 'Verbose',
    key: '--verbose',
    type: FIELD_TYPES.TOGGLE,
    flag: true
  },
  INFO: {
    name: 'Info',
    key: '--info',
    type: FIELD_TYPES.TOGGLE,
    flag: true
  }
};

const argumentsOrder = getDefaultOrder(ARGUMENTS);

export default {
  name: CLI_NAME,
  description: 'Generar con CRA 2.0',
  cli: CLI_NAME,
  options: [
    {
      name: 'Advanced',
      type: 'toggle',
      key: 'advanced',
      children: {
        condition: value => value === true,
        list: [
          {
            name: 'Custom Scripts',
            key: 'custom-scripts',
            type: FIELD_TYPES.TOGGLE,
            children: {
              condition: value => value === true,
              list: [ARGUMENTS.SCRIPTS_VERSION]
            }
          },
          ARGUMENTS.USE_NPM,
          ARGUMENTS.VERBOSE,
          ARGUMENTS.INFO
        ]
      }
    }
  ],
  create: ({ name, path, ...rest }) => {
    const argz = processArguments(rest, ARGUMENTS, false, argumentsOrder);
    return compactJoin([CLI_NAME, name, path, argz]);
  },
  getForProcess: formValues => {
    const { name, path, ...rest } = formValues;
    const argz = processArguments(rest, ARGUMENTS, true, argumentsOrder);
    return {
      cli: CLI_NAME,
      name,
      path,
      argz: compact([name, ...argz])
    };
  }
};
