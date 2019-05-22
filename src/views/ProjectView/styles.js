import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import emotion from 'react-emotion';
import flex from 'styles/flex';
import { hoverable, whiteish } from 'styles/mixins';
import * as A from 'styles/shared-components';

export const Mid = emotion(A.Mid)(({ hasProcesses }) => ({
  ...flex.vertical,
  ...(hasProcesses && {
    paddingBottom: 1000
  })
}));

export const Right = emotion.div({
  ...flex.vertical
});

export const InfoStrip = emotion(A.Horizontal)({
  padding: 15,
  backgroundColor: '#1e272e',
  color: 'white',
  fontSize: 14
});

export const ProjectView = emotion.div({
  color: 'rgba(0,0,0,0.5)',
  ...flex.vertical,
  flex: 1
});

export const Icon = emotion(FontAwesomeIcon)({
  color: 'white'
});

export const Title = emotion.div({
  fontWeight: 'bold',
  color: 'white'
});

export const Section = {
  Title: emotion.div({
    color: 'white'
  }),
  Content: emotion.div({})
};
