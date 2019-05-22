import React, { Component } from 'react';

import {
  faAlignCenter,
  faCaretDown,
  faCaretUp,
  faSpinner,
  faStop,
  faSync,
  faSkull
} from '@fortawesome/fontawesome-free-solid/index';

//styles
import * as S from './styles';
import { Horizontal } from 'styles/flex-components';

//types
import { variants } from 'storybook-helpers/variants';
import { boolean, text } from '@storybook/addon-knobs';
import PropTypes from 'prop-types';

class Bar extends Component {
  static propTypes = {
    running: PropTypes.bool,
    minimized: PropTypes.bool,
    title: PropTypes.string,
    //functions
    onClearOutput: PropTypes.func.isRequired,
    onRestart: PropTypes.func.isRequired,
    onMinimize: PropTypes.func.isRequired,
    onStop: PropTypes.func.isRequired,
    onMouseDown: PropTypes.func
  };

  static getKnobs = () => ({
    running: boolean('running'),
    minimized: boolean('minimized'),
    title: text('title')
  });

  static Variants = {
    running: variants.boolean(['running', 'not running']),
    title: variants.boolean(['normal title', 'crazy/long/something/weird/title']),
    minimized: variants.boolean()
  };

  render() {
    const {
      running,
      onMouseDown,
      title,
      minimized,
      onClearOutput,
      onRestart,
      onStop,
      onMinimize,
      onKill
    } = this.props;

    return (
      <S.Bar onMouseDown={onMouseDown} minimized={minimized}>
        <Horizontal spaceAll={15} centerV>
          <S.TerminalIcon
            tip={minimized ? 'Maximize' : 'Minimize'}
            onClick={onMinimize}
            icon={minimized ? faCaretUp : faCaretDown}
          />
          {running && <S.TerminalIcon spin={true} icon={faSpinner} />}
          {title && <S.Title>{title}</S.Title>}
        </Horizontal>

        <S.Icons spaceAll={15}>
          <S.TerminalIcon tip="Limpiar terminal" onClick={onClearOutput} icon={faAlignCenter} />
          {running && <S.TerminalIcon tip="Parar acción actual" icon={faStop} onClick={onStop} />}
          <S.TerminalIcon tip="Reiniciar acción actual" icon={faSync} onClick={onRestart} />
          <S.TerminalIcon tip="Eliminar todos los procesos" icon={faSkull} onClick={onKill} />
        </S.Icons>
      </S.Bar>
    );
  }
}

export default Bar;
