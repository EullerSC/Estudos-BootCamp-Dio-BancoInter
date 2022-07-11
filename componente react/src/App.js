import Item from './components/Item';
import Card from './components/Card';
const App = () => {
return(
  <>
    <h1>Minha primeira aplicação React</h1>
    <ul>
    <Item >Item 1</Item>
    <Item >Item 2</Item>
    <Item >Item 3</Item>
    </ul>
    <Card/>
  </>
)
}
export default App;

//export default function App (){
// return
//  (
//   <h1>hello world!</h1>
//  )
//}  <a href="/" className="list-group-item list-group-item-action list-group-item-danger">Item 2</a>
//<a href="/" className="list-group-item list-group-item-action list-group-item-warning">Item 3</a>