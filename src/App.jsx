import Board from "./components/Board";
import Header from "./components/Header";
import Form from "./components/Form";

export default function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Form />
        <Board />
      </main>
    </>
  );
}
