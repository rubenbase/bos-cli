import flex from 'styles/flex';
import { fixedHeight, size } from 'styles/mixins';
import { common } from 'styles/flex-components';
import emotion from 'react-emotion';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import IconWithTip from 'components/IconWithTip';

export const Bar = emotion.div(
  {
    flex: 1,
    padding: 15,
    ...flex.horizontal,
    ...flex.centerHorizontalV,
    ...flex.spaceBetween,
    ...fixedHeight(15),
    backgroundColor: '#833471',
    userSelect: 'none'
  },
  ({ minimized }) => ({
    ...(!minimized && {
      cursor: 'ns-resize'
    })
  })
);

export const Stop = emotion.button({});

export const Icons = emotion.div(
  {
    ...flex.horizontal
  },
  common('horizontal'),
  ({ minimized }) => ({
    ...(!minimized && {
      top: 15,
      right: 15
    }),
    ...(minimized && {})
  })
);

export const TerminalIcon = emotion(IconWithTip)({
  ...size(20),
  color: 'white',
  cursor: 'pointer'
});

export const Title = emotion.div({
  ...flex.horizontal,
  color: 'white',
  fontSize: 13
});
