import { RouterProvider } from "react-router-dom";
import { mainRoute } from "./router/mainRoute";
import OnlineStatus from "./pages/Online/Online";

const App = () => {
  return (
    <div>
      <RouterProvider router={mainRoute} />
      <OnlineStatus />
    </div>
  );
};

export default App;
