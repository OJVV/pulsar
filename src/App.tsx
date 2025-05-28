import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './components/layout';
import HomePage from './pages/home';
import EventsPage from './pages/events';
import GalleryPage from './pages/gallery';
import AboutPage from './pages/about';

const App: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/events" component={EventsPage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </Layout>
  );
};

export default App;