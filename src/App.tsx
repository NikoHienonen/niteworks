import styled from "styled-components";
import { Landing } from "./Components/Landing";

const AppContainer = styled.div`
  width: 100%;
`;

function App() {
  return (
    <AppContainer>
      <Landing />
    </AppContainer>
  );
}

export default App;
