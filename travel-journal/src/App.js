import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

function App() {

  const cardElements = data.map(item => {
     return  (
       <Card
          key={item.title}
          item={item}
       />
     )
   })

  return (
    <div>
      <Header/>
      {cardElements}
    </div>
  );
}

export default App;
