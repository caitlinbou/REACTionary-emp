import Jumbotron from "./components/Jumbotron.js";
import EmpContainer from "./components/EmpContainer.js";
import EmpData from "./components/EmpData.js";



function App() {
  return (
    <div className="App">
      <Jumbotron />
      <EmpContainer>
        <EmpData/>
         {/* {response.map(person =>{
           return <EmpData 
           img={person.picture.thumbnail} 
           name={person.name.first + person.name.last}
           phone={person.phone}
           email={person.email}
           dob={person.dob}
           />
         })}
         */}
      </EmpContainer>
    </div>
  );
}

export default App;
