import React from 'react';
import EmployeeCard from "./Components/EmployeeCard";
import Wrapper from "./Components/Wrapper";
import employees from "./employees.json";
import "./App.css";

function App() {
  return (
    <Wrapper>
      <h1 className="title">North Pole Employee Directory</h1>
      <EmployeeCard
        name={employees[0].name}
        image={employees[0].image}
        occupation={employees[0].occupation}
        location={employees[0].location}
      />
      <EmployeeCard
        name={employees[1].name}
        image={employees[1].image}
        occupation={employees[1].occupation}
        location={employees[1].location}
      />
      <EmployeeCard
        name={employees[2].name}
        image={employees[2].image}
        occupation={employees[2].occupation}
        location={employees[2].location}
      />
            <EmployeeCard
        name={employees[3].name}
        image={employees[3].image}
        occupation={employees[3].occupation}
        location={employees[3].location}
      />
            <EmployeeCard
        name={employees[4].name}
        image={employees[4].image}
        occupation={employees[4].occupation}
        location={employees[4].location}
      />
            <EmployeeCard
        name={employees[5].name}
        image={employees[5].image}
        occupation={employees[5].occupation}
        location={employees[5].location}
      />
            <EmployeeCard
        name={employees[6].name}
        image={employees[6].image}
        occupation={employees[6].occupation}
        location={employees[6].location}
      />
            <EmployeeCard
        name={employees[7].name}
        image={employees[7].image}
        occupation={employees[7].occupation}
        location={employees[7].location}
      />
            <EmployeeCard
        name={employees[8].name}
        image={employees[8].image}
        occupation={employees[8].occupation}
        location={employees[8].location}
      />
            <EmployeeCard
        name={employees[8].name}
        image={employees[8].image}
        occupation={employees[8].occupation}
        location={employees[8].location}
      />
            <EmployeeCard
        name={employees[9].name}
        image={employees[9].image}
        occupation={employees[9].occupation}
        location={employees[9].location}
      />
            <EmployeeCard
        name={employees[10].name}
        image={employees[10].image}
        occupation={employees[10].occupation}
        location={employees[10].location}
      />
            <EmployeeCard
        name={employees[11].name}
        image={employees[11].image}
        occupation={employees[11].occupation}
        location={employees[11].location}
      />
            <EmployeeCard
        name={employees[12].name}
        image={employees[12].image}
        occupation={employees[12].occupation}
        location={employees[12].location}
      />
            <EmployeeCard
        name={employees[13].name}
        image={employees[13].image}
        occupation={employees[13].occupation}
        location={employees[13].location}
      />
            <EmployeeCard
        name={employees[14].name}
        image={employees[14].image}
        occupation={employees[14].occupation}
        location={employees[14].location}
      />
    </Wrapper>
  );
}


export default App;
