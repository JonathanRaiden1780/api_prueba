import logo from './logo.svg';
import './App.css';
import { store } from "./Actions/store";
import { Provider } from "react-redux";
import  Areas from "./components/Areas";
import { Container } from "semantic-ui-react";
function App() {
  return (
    <Provider store={store}>
      <Container maxwidth="lg">
      </Container>
        <Areas/>
    </Provider>
  );
}

export default App;
