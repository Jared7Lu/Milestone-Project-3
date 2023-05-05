import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";

//pages
import Login from "./pages/account_CRUD/login-page";
import Register from "./pages/account_CRUD/sign-in-page";
import Account from "./pages/account_CRUD/account-page";
import MainPage from "./pages/main-page";
import CreatePost from "./pages/posts_CRUD/create-post";
import UpdatePost from "./pages/posts_CRUD/update-post";


function App() {
  const [token, setToken] = useState(false);
  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/register"} element={<Register />} />
          <Route path={"/"} element={<Login setToken={setToken} />} />
          <Route path={"/main-page"} element={<MainPage />} />

          {token ? ( <Route path={"/account"} element={<Account token={token} />} />) : ("" )}

          {token ? (<Route path={"/create-post"} element={<CreatePost token={token} />}/>) : ("")}

          <Route path={"/:id"} element={<UpdatePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
