import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { recoilKey } from './recoilKey';

import type { MenuOption } from '../types';

const { persistAtom } = recoilPersist();

export const menuOptionState = atom<MenuOption>({
  key: recoilKey.menuOptionState,
  default: { bgImg: 'unfixed', bgFilter: 'unfixed', addMonth: 0, addHours: 0 },
  effects_UNSTABLE: [persistAtom],
});
