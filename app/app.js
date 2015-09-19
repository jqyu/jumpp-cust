import './theme';
import { router, route } from 'reapp-kit';

router(require,
  route('home', '/', { dir: '' },
    route('locations'),
    route('location', '/location/:location_id')/*
      route('menu'),
      route('menu-item'),
      route('orders'),
      route('order')
    ),
    route('wallet')*/
  )
);
