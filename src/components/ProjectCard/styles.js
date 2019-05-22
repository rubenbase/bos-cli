import emotion from 'react-emotion';
import flex from 'styles/flex';
import { size } from 'styles/mixins';

//components
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export const ProjectCard = emotion.div(
  {
    ...flex.vertical,
    ...flex.spaceBetween,
    display: 'flex',
    border: '1px solid rgba(255, 255, 255, 0.5)',
    borderRadius: 3,
    minWidth: 200,
    minHeight: 100,
    padding: 15,
    background: '#b31217' /* fallback for old browsers */,
    background: '-webkit-linear-gradient(to bottom, #500000, #000)' /* Chrome 10-25, Safari 5.1-6 */,
    background:
      'linear-gradient(to bottom, #500000, #000)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,

    marginBottom: 15,
    color: 'white',
    maxWidth: 330
  },
  ({ markRed, horizontal }) => ({
    ...(markRed && {
      border: '1px solid #ea9797'
    }),
    ...(horizontal && {
      width: '100%'
    }),
    ...(!horizontal && {
      marginRight: 15
    })
  })
);

export const Icon = emotion(FontAwesomeIcon)(
  {
    ...size(18),
    cursor: 'pointer'
  },
  ({ color }) => ({
    color: color || 'white'
  })
);

export const Name = emotion.div({
  marginBottom: 10,
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline'
  }
});

export const Tag = emotion.div({
  backgroundColor: '#833471',
  padding: '3px 5px',
  borderRadius: 3,
  fontSize: 12,
  color: 'white',
  flexShrink: 0,
  minHeight: 19
});
