import { useState } from 'react';
import Navbar from '../components/Navbar';

const quizData = [
  {
    id: 1,
    question: "Which of the following best describes your interest?",
    options: ["Technology", "Business", "Arts", "Science"],
  },
  {
    id: 2,
    question: "What type of work environment do you prefer?",
    options: ["Office setting", "Remote/Flexible", "Outdoor/Active", "Laboratory"],
  },
  {
    id: 3,
    question: "Which skill do you enjoy using the most?",
    options: ["Problem Solving", "Creative Thinking", "Communication", "Analysis"],
  },
];

const Quizzes = () => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleOptionChange = (questionId, selectedOption) => {
    setAnswers((prev) => ({ ...prev, [questionId]: selectedOption }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    console.log("User Answers:", answers);
  };

  return (
    <div className="min-h-screen bg-gray-100 mr-25 ml-25">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-8">Career Interest Quiz</h1>

        {quizData.map((q) => (
          <div key={q.id} className="mb-6 bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">{q.question}</h2>
            {q.options.map((option) => (
              <label key={option} className="block mb-2">
                <input
                  type="radio"
                  name={`question-${q.id}`}
                  value={option}
                  checked={answers[q.id] === option}
                  onChange={() => handleOptionChange(q.id, option)}
                  className="mr-2"
                />
                {option}
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
    </div>
  );
};

export default Quizzes;
