import React from 'react';
import { Pane } from 'evergreen-ui';

import { MainPanel } from '../components/main/main.panel';
import { ActionsPanel } from '../components/actions/actions.panel';
import { ObjectsPanel } from '../components/objects/objects.panel';
import { StatsPanel } from '../components/stats/stats.panel';
import { UserInputPanel } from '../components/user-input/user-input.panel';
import { ErrorDialog } from '../components/dialogs/error/error.dialog';
import { observer } from 'mobx-react-lite';
import { useLayout } from '../game/layout';
import { Menu } from '../components/menu/menu';

export const Player: React.FC = observer(() => {
  const { templateAreas } = useLayout();
  return (
    <>
      <Pane
        width="100vw"
        height="100vh"
        display="grid"
        gridGap="8px"
        gridTemplateRows="1fr 300px 50px"
        gridTemplateColumns="1fr 150px 300px"
        gridTemplateAreas={templateAreas}
      >
        <MainPanel />
        <ActionsPanel />
        <ObjectsPanel />
        <StatsPanel />
        <UserInputPanel />
      </Pane>
      <ErrorDialog />
      <Menu />
    </>
  );
});