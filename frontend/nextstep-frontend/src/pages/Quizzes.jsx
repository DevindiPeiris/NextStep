import { useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';


const Quizzes = () => {
  const [quizData, setQuizData] = useState([]);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState(null);
  
  const navigate = useNavigate();

  useEffect(() => {
  const fetchQuiz = async () => {
    try {
      const res = await fetch('http://localhost:8081/api/v1/quiz/questions'); 
      const data = await res.json();
      setQuizData(data);
    } catch (err) {
      console.error("Failed to load quiz data", err);
    }
  };
  fetchQuiz();
  }, []);


  const handleOptionChange = (questionId, selectedOption) => {
    setAnswers((prev) => ({ ...prev, [questionId]: selectedOption }));
  };


  const handleSubmit = async () => {
  try {
    const res = await fetch('http://localhost:8081/api/v1/quiz/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(answers),
    });

    const data = await res.json();
    navigate('/results', { state: { scores: data } });
  } catch (err) {
    console.error('Submission failed:', err);
  }
  };



  return (
    <div className="min-h-screen bg-gray-100 mr-25 ml-25">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-8">Career Interest Quiz</h1>

        {quizData.map((q) => (
          <div key={q.id} className="mb-6 bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">{q.question}</h2>
            {q.options.map((optionObj) => (
              <label key={optionObj.optionID} className="block mb-2">
                <input
                  type="radio"
                  name={`question-${q.questionID}`}
                  value={optionObj.optionID}
                  checked={answers[q.questionID] === optionObj.optionID}
                  onChange={() => handleOptionChange(q.questionID, optionObj.optionID)}
                  className="mr-2"
                />
                {optionObj.option}
              </label>
            ))}
          </div>
        ))}

        <button
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition"
        >
          Submit
        </button>

        {submitted && (
          <div className="mt-8 text-center text-green-600 font-semibold">
            Quiz submitted successfully!
          </div>
        )}
      </div>
      {results && (
  <div className="mt-8 p-6 bg-white rounded-xl shadow text-gray-800">
    <h2 className="text-xl font-semibold mb-4">Your Field Preferences:</h2>
    <ul>
      {Object.entries(results).map(([field, count]) => (
        <li key={field} className="mb-2">
          <span className="font-medium">{field}:</span> {count}
        </li>
      ))}
    </ul>
  </div>
)}


    </div>
  );
};

export default Quizzes;
