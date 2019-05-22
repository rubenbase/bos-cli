import React, { Component } from 'react';
import { Tooltip } from 'react-tippy';
import { observer, inject } from 'mobx-react';
import { faTrash, faUpload, faArrowsAlt, faGlobe } from '@fortawesome/fontawesome-free-solid';

//emotion
import * as S from './styles';
import { Vertical } from 'styles/flex-components';

const IconButton = ({ tip, icon, onClick }) => (
  <Tooltip delay={300} title={tip}>
    <S.SmallIcon.Button onClick={onClick}>
      <S.SmallIcon.Icon icon={icon} />
    </S.SmallIcon.Button>
  </Tooltip>
);

@inject('store')
@observer
class DependenciesList extends Component {
  render() {
    const { list = {}, isDev, onUpgrade, onMove, onDelete, store } = this.props;

    return (
      <S.DependenciesList>
        <Vertical spaceAll={3}>
          {Object.entries(list).map(
            ([name, version]) =>
              typeof name === 'string' &&
              typeof version === 'string' && (
                <S.Dependency.Wrap>
                  <S.Dependency.Name>
                    {name} {version}
                  </S.Dependency.Name>
                  <S.Icons spaceAll={5}>
                    <IconButton
                      icon={faGlobe}
                      tip={`Abrir su página npm`}
                      onClick={() => store.goToDependencyPage(name)}
                    />
                    <IconButton
                      icon={faTrash}
                      tip={`Borrar ${name}`}
                      onClick={() => onDelete(name, version, isDev)}
                    />
                    <IconButton
                      icon={faUpload}
                      tip={`Actualizar ${name}`}
                      onClick={() => onUpgrade(name, version, isDev)}
                    />
                    <IconButton
                      icon={faArrowsAlt}
                      tip={isDev ? 'Mover a Dependencias' : 'Mover a dev Dependencias'}
                      onClick={() => onMove(name, version, isDev)}
                    />
                  </S.Icons>
                </S.Dependency.Wrap>
              )
          )}
        </Vertical>
      </S.DependenciesList>
    );
  }
}

export default DependenciesList;
