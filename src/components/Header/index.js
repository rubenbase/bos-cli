import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import routes from 'config/routes';

//IconWithTips
import { faHome } from '@fortawesome/fontawesome-free-solid';

//styles
import * as S from './styles';
import * as A from 'styles/shared-components';
import { Horizontal } from 'styles/flex-components';

//components
import IconWithTip from 'components/IconWithTip';
import { faGavel, faCog, faArrowLeft } from '@fortawesome/fontawesome-free-solid/index';

@inject('store')
@observer
class Header extends Component {
  render() {
    const { store, children, renderRight } = this.props;
    const { router } = store;
    const showHomeIcon = router.page !== routes.home.id;

    return (
      <S.Header>
        <A.Horizontal spaceAll={15}>
          {showHomeIcon && (
            <IconWithTip tip="Ir al inicio" onClick={() => router.openPage(routes.home)} icon={faArrowLeft} />
          )}
        </A.Horizontal>

        <Horizontal spaceAll={20}>{children}</Horizontal>

        <A.Horizontal spaceAll={15}>
          {renderRight && renderRight}
          <IconWithTip onClick={store.killProcess} icon={faGavel} tip="Kill !!!" />
          {/* <IconWithTip
            onClick={store.cssConverterDialogOpen.setTrue}
            icon={faAdjust}
            tip="css-to-js converter"
          />
          <IconWithTip onClick={store.babelReplDialogOpen.setTrue} icon={faBold} tip="Babel REPL" />*/}
          <IconWithTip onClick={store.settingsOpened.setTrue} tip="Ajustes" icon={faCog} />
        </A.Horizontal>
      </S.Header>
    );
  }
}

export default Header;
