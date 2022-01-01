import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from 'common/styles/global';
import { AppProvider } from 'hooks';
import { Routes } from 'routes';

function Bootstrap() {
  return (
    <>
      <BrowserRouter>
        <AppProvider>
          <Routes />
        </AppProvider>
      </BrowserRouter>

      <GlobalStyles />
    </>
  );
}

export default Bootstrap;
