import Header from "./components/Header";
import Profile from "./components/Profile";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="max-w-lg mx-auto mt-5">
      <Header />
      <Profile name="John Doe" email="john.doe@example.com" />
      <Counter />
    </div>
  );
}

export default App;

