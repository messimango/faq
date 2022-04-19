import React, {useState} from 'react';
import quests from './questions.js';
import Questbox from './Question.js'
import './App.css';

function App() {
  const [questions, setQuestions] = useState(quests);
  return <div className="App">
      <div className='question-area'>
        <h3>F.A.Q</h3>
      </div>
      <div className='questions'>
        {questions.map((question) => { return <Questbox key={question.id} {... question} />;
        })
        }
      </div>
    </div>;
}

export default App;
