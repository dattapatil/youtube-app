import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import store from './utils/store';

import {RouterProvider, createBrowserRouter } from "react-router-dom";
import MainBody from './components/MainBody';
import WatchVideo from './components/WatchVideo';

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children:[
    {
      path: "/",
     element: <MainBody/>
    },
    {
      path: "watchvideo",
     element: <WatchVideo/>
    }
  ]
}])

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Header />
     <RouterProvider router={appRouter} />

    </div>
    </Provider>
  );
}

export default App;
