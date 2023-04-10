import { useLocation, useNavigation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import actions from "./redux/actions";
import App from "./App";

function AppStore() {
  const location = useLocation();
//   const navigate = useNavigation();
  const dispatch = useDispatch();

  const reduxState = {
    apploading: useSelector((state) => state["apploading"].data),
    notify: useSelector(state => state["notify"].data),
    products: useSelector((state) => state["products"].data),
  };
  const reduxActions = {};
  Object.keys(actions).forEach((key) => {
    reduxActions[key] = async (data) => await actions[key](dispatch, data);
  });

  return (
    <App
      {...reduxState}
      actions={reduxActions}
      location={location}
    //   navigate={navigate}
    />
  );
}

export default AppStore;
