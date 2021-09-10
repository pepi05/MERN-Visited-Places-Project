import React, { useState } from "react";
import "./App.css"
import GoalList from './components/GoalList/GoalList';
import NewGoal from "./components/NewGoal/NewGoal";

function App() {
  const [courseGoals, setCourseGoals] = useState([
    {id: 'cg1', text: 'Finish the course'},
    {id: 'cg2', text: 'Learn all about the Course Main Topic'},
    {id: 'cg3', text: 'Become a full stack web developer'}
  ])

  const addNewGoalHandler = (newGoal) => {
    // setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals((prevState) => {
      return prevState.concat(newGoal);
    });
  };

  return (
    <div className="course-goals">
      <h2> Course goals: </h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
}

export default App;
