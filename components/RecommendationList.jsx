import React from 'react';

import { useRecommendations } from '../context/RecommendationContext';
import RecommendationItem from './RecommendationItem';

const RecommendationList = () => {
  const { recommendations } = useRecommendations();

  if (recommendations.length === 0) {
    return <p className="text-gray-500">No recommendations yet.</p>;
  }

  return (
    <div className="space-y-4">
      {recommendations.map((rec) => (
        <RecommendationItem key={rec.id} rec={rec} />
      ))}
    </div>
  );
};

export default RecommendationList;
