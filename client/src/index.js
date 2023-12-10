import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Chart as ChartJS, Title, Tooltip, Legend } from 'chart.js';
import { store, persistor } from './store/redux';
import Application from './Application';

ChartJS.register(Title, Tooltip, Legend);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Application />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
);
