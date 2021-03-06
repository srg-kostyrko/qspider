import React, { Fragment } from 'react';
import { MainFrame } from './ui-blocks/main-frame';
import { WaitLock } from './system/wait-lock';
import { Menu } from './system/menu';
import { MsgDialog } from './dialogs/msg/msg.dialog';
import { InputDialog } from './dialogs/input/input.dialog';
import { ErrorDialog } from './dialogs/error/error.dialog';
import { LayoutContainer } from './layout-container';
import { SaveSlotsDialog } from './dialogs/save-slots/save-slots';
import { FloatingContainer } from './layout/floating';

export const Player: React.FC = () => {
  return (
    <Fragment>
      <MainFrame>
        <LayoutContainer />
      </MainFrame>
      <FloatingContainer />
      <Menu />
      <MsgDialog />
      <InputDialog />
      <ErrorDialog />
      <SaveSlotsDialog />
      <WaitLock />
    </Fragment>
  );
};
