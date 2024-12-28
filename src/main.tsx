import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import Root from "./root";
import { store } from "./redux/store/store";
import { Provider } from "react-redux";
import { ErrorFallback } from "./component/ErrorFallback";
import "./index.css";
import "./i18n";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Router>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Provider store={store}>
        <Root />
      </Provider>
    </ErrorBoundary>
  </Router>
);
