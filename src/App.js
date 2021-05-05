import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

const App = () => {
  const [tasks,setTasks] = useState([
    {
      id: 1,
      text: 'Dr. Appointment',
      day: 'Feb 5 at 2pm',
      reminder : true,
    },
    {
      id: 2,
      text: 'Meeting at school',
      day: 'Feb 6 at 3pm',
      reminder : true,
    },
  ])
  return (
    <div className="container">
      <Header/>
      <Tasks tasks = {tasks}/>
    </div>
  );
}

export default App;
