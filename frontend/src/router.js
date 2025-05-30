import { createBrowserRouter } from "react-router-dom"

import Home from './Home';
import BookDetail from './BookDetail';
import BookRigst from "./BookRigst";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/books/:id',
        element: <BookDetail />
    },
    {
        path: '/books/new',
        element: <BookRigst />
    }
]);

export default router;