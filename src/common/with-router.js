import { useLocation, useNavigate, useParams } from "react-router-dom";

//Higher Order Component to use useful hooks as React-router-dom v6 support for history has been deprecated
export const withRouter = (Component) => {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
};