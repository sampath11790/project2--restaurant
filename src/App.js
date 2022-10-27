import MealsList from "./Components/Meals/MealsList";
import Card from "./Components/Card/Card";
import Header from "./Components/UI/Header";
const foods=[
  {name:'Sandwich',price:150},
  {name:'pizza',price:550},
  {name:'BlackForest',price:120}
]

function App() {
  return (
    <Card className="app">
     <Header></Header>
     
     <MealsList food={foods}></MealsList>
     
    
    </Card>
  );
}

export default App;
