import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import UserList from "./components/UserList";
import Home from "./components/Home";
import UserDetails from "./components/UserDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      loader: () => fetch("https://602e7c2c4410730017c50b9d.mockapi.io/users"),

      children: [
        {
          path: "/:id",
          element: <UserDetails></UserDetails>,
          loader: ({ params }) =>
            fetch(
              `https://602e7c2c4410730017c50b9d.mockapi.io/users/${params.id}`
            ),
        },
      ],
    },
    {
      path: "/",
      element: <UserList></UserList>,
      loader: () => fetch("https://602e7c2c4410730017c50b9d.mockapi.io/users"),
    },
    // {
    //   path: "/:id",
    //   element: <UserDetails></UserDetails>,
    //   loader: ({ params }) =>
    //     fetch(`https://602e7c2c4410730017c50b9d.mockapi.io/users/${params.id}`),
    // },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
