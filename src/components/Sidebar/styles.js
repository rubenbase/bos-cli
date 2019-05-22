import emotion from 'react-emotion';
import flex from 'styles/flex';

export const Sidebar = emotion.div({
  ...flex.vertical,
  width: 260,
  background: '#b31217' /* fallback for old browsers */,
  background: '-webkit-linear-gradient(to bottom, #500000, #000)' /* Chrome 10-25, Safari 5.1-6 */,
  background:
    'linear-gradient(to bottom, #500000, #000)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
  height: '100vh',
  color: 'white',
  padding: 15,
  overflowY: 'scroll',
  overflowX: 'hidden'
});
