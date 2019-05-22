import emotion from 'react-emotion';
import flex from 'styles/flex';

export const App = emotion.div({
  ...flex.vertical,
  flex: 1,
  width: '100vw',
  height: '100vh',
  maxHeight: '100vh',
  maxWidth: '100vw',
  overflowY: 'hidden',
  background: '#200122' /* fallback for old browsers */,
  background: '-webkit-linear-gradient(to bottom, #6f0000, #200122)' /* Chrome 10-25, Safari 5.1-6 */,
  background:
    'linear-gradient(to bottom, #6f0000, #200122)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
});
