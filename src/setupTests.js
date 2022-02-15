import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import store from "../src/redux/store";

const renderWithProviders = (component) => {
  const Providers = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return render(component, { wrapper: Providers });
};

export default renderWithProviders;
