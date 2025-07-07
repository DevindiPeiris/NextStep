import { useLocation } from 'react-router-dom';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  CartesianGrid, ResponsiveContainer
} from 'recharts';

const Results = () => {
  const location = useLocation();
  const scores = location.state?.scores || {};

  const allFields = ['IT', 'Healthcare', 'Business & Finance', 'Arts & Media','Engineering','Education'];

  const data = allFields.map((field) => ({
    field,
    score: scores[field] || 0,
  }));

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <h1 className="text-2xl font-bold text-center mb-6">Your Career Field Scores</h1>
      <div className="bg-white p-6 rounded-xl shadow-md mt-20">
        <ResponsiveContainer width="100%" height={500}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="field" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="score" fill="#4F46E5" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Results;
