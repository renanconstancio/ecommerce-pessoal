import { Router } from 'express';

import categoriesRoutes from '@modules/categories/infra/http/routes/category.routes';
import customersRouter from '@modules/customers/infra/http/routes/customers.routes';

// import productsRouter from '@modules/products/infra/http/routes/products.routes';
// import usersRouter from '@modules/users/infra/http/routes/users.routes';
// import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
// import passwordRouter from '@modules/users/infra/http/routes/password.routes';
// import profileRouter from '@modules/users/infra/http/routes/profile.routes';
// import ordersRouter from '@modules/orders/infra/http/routes/orders.routes';

const routes = Router();

routes.use('/categories', categoriesRoutes);
routes.use('/customers', customersRouter);

// routes.use('/products', productsRouter);
// routes.use('/users', usersRouter);
// routes.use('/sessions', sessionsRouter);
// routes.use('/password', passwordRouter);
// routes.use('/profile', profileRouter);
// routes.use('/orders', ordersRouter);

export default routes;
