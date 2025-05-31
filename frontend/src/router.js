import { createBrowserRouter } from "react-router-dom"

import Home from './Home';
import BookInfo from "./BookInfo";
import BookForm from "./BookForm";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/books/:id',
        element: <BookInfo />
    },
    {
        path: '/books/new',
        element: <BookForm />
    },
    {
        path: '/books/edit/:id',
        element: <BookForm />
    }
]);

export default router;