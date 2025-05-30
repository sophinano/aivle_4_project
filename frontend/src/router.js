import { createBrowserRouter } from "react-router-dom"

import Home from './Home';
import bookDetail from './detail';
import bookRigst from './bookRegist';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/books/:id?',
        element: <bookDetail />
    },
    {
        path: '/books/new',
        element: <bookRigst />
    }
]);

export default router;