import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store'
// import { GlobalStyles } from './globalStyles'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      {/* <GlobalStyles /> */}
      <App />
    </Provider>
  </StrictMode>
)
