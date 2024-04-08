import { useState, useEffect } from "react";
import "./App.css";
import Cardlist from "./componetnts/card-list/card-lis.component";
import SearchBox from "./componetnts/search-box/searchBoc.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);

  console.log("render");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });

  return (
    <div className="App">
      <h1 className="app-title">Monster Roledex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
        className="monsters-search-box"
      />
      <Cardlist monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component{

//   constructor(){
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }

// componentDidMount(){
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) =>
//       this.setState(
//         () => {
//           return {monsters: users};
//         },
//         () => {
//           console.log(this.state);
//         }
//       ));
// }

//   onSeachChange =(event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//      return { searchField };
//     })
//  }

//   render() {
//     const { monsters, searchField} = this.state;
//     const { onSeachChange } = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//      });
//     return (
//       <div className="App">
//         <h1 className='app-title'>Monster Roledex</h1>
//         <SearchBox onChangeHandler={onSeachChange} placeholder='search monsters' className='monsters-search-box'/>
//         <Cardlist monsters= {filteredMonsters}/>
//       </div>
//     );
//   }

// }

export default App;
