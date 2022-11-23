import "./App.css";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <Title text="Manh An" color="red" fontSize="30px" />
      <Title text="Manh An 2" color="yellow" fontSize="50px" />
    </div>
  );
}

export default App;

//1 jsx
//+ cho phép logic -> HTML
//+ className thay cho class

//2 components
// chia nhỏ và tái sử dụng

//3 props : là 1 object , kỹ thuật truyền data từ cha xuống con
//4 styles trong react
