import { compactJoin, getDefaultOrder, processArguments } from '../../utils';
import compact from 'lodash/compact';

import FIELD_TYPES from '../../field-types';

const CLI_NAME = 'create-react-app';

const ARGUMENTS = {
  WEB: {
    name: 'Generar web',
    key: '--scripts-version',
    default: 'react-scripts',
    type: FIELD_TYPES.TEXT
  },
  MOBILE: {
    name: 'Generar mobile',
    key: '--use-npm',
    type: FIELD_TYPES.TOGGLE,
    flag: true
  },
  SERVER: {
    name: 'Generar server',
    key: '--verbose',
    type: FIELD_TYPES.TOGGLE,
    flag: true
  }
};

const argumentsOrder = getDefaultOrder(ARGUMENTS);

export default {
  name: 'rufrontgen',
  description: 'Generar con RuFrontGen',
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
          ARGUMENTS.WEB,
          ARGUMENTS.MOBILE,
          ARGUMENTS.SERVER
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
