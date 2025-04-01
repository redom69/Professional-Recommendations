import React from 'react';

import { useRecommendations } from '../context/RecommendationContext';

const RecommendationList = () => {
  const { recommendations } = useRecommendations();

  if (recommendations.length === 0) {
    return <p className="text-gray-500">No recommendations yet.</p>;
  }

  return (
    <div className="space-y-4">
      {recommendations.map((rec) => (
        <div key={rec.id} className="bg-white border rounded p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <img
                src={rec.author.photo}
                alt={rec.author.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{rec.author.name}</p>
                <p className="text-sm text-gray-500">
                  {rec.author.position} at {rec.author.company}
                </p>
              </div>
            </div>
            <span className="text-sm text-gray-400">{rec.date}</span>
          </div>
          <p className="text-gray-700 break-words whitespace-pre-line">
            {rec.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationList;
