import React from 'react';

import Home from 'views/Home';
import ProjectView from 'views/ProjectView';
import GroupView from 'views/GroupView';
import WebProjectView from 'views/WebProjectView';

const routes = {
  home: {
    id: 'home',
    path: '/',
    extra: {
      component: <Home />
    }
  },
  project: {
    id: 'project',
    path: '/project/:id',
    extra: {
      component: <ProjectView />
    }
  },
  webProject: {
    id: 'web-project',
    path: '/web-project/:id',
    extra: {
      component: <WebProjectView />
    }
  },
  group: {
    id: 'group',
    path: '/group/:id',
    extra: {
      component: <GroupView />
    }
  }
};

export default routes;
