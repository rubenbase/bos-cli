import emotion from 'react-emotion';
import flex from 'styles/flex';
import { colors } from 'styles/colors';

export const Header = emotion.div({
  ...flex.horizontal,
  ...flex.centerHorizontalV,
  ...flex.spaceBetween,
  width: '100%',
  minHeight: 50,
  background: '#500000' /* fallback for old browsers */,
  padding: 15,
  color: 'white'
});
