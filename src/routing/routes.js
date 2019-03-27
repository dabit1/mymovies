import Home from '../components/pages/home';
import MovieDetails from '../components/pages/movie-details';
import NoMatch from '../components/pages/no-match';

const routes = [
  {
    path: '/movie-details/:id',
    modal: true,
    exact: true,
    component: MovieDetails,
  },
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    component: NoMatch,
  },
];

export default routes;
