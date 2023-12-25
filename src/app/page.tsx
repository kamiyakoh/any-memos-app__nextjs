import { FC } from 'react';
import { Toaster } from 'react-hot-toast';

import { Frame } from 'app/_components/Frame';
import { Login } from 'app/_components/Login';
import { Modal } from 'app/_components/uiParts/Modal';
import { getIsAuthZ } from 'app/_utils/fetch';

const Home: FC = async () => {
  const isAuthZ = await getIsAuthZ();

  return (
    <div>
      <Frame />
      <Modal addClassPanel="border-violet-500" isOpen={!isAuthZ} enableCloseButton={false}>
        <Login />
      </Modal>
      <Toaster
        toastOptions={{
          style: {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            background: 'rgba(0, 0, 0, 0.5)',
            color: '#fff',
            maxWidth: '90vw',
            padding: '1rem',
            backdropFilter: 'blur(4px)',
          },
        }}
      />
    </div>
  );
};
export default Home;
