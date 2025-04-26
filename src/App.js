import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ExerciseList from './components/ExerciseList';
import EditExercise from './components/EditExercise';
import CreateExercise from './components/CreateExercise';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Route path="https://galigopi.github.io/MERN-basic-project/" exact component={ExerciseList} />
        <Route path="/edit/:id"  component={EditExercise} />
        <Route path="/create"  component={CreateExercise} />
        <Route path="/user"  component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
