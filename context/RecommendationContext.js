import React, { createContext, useContext, useState } from 'react';
import { format } from 'date-fns';
import { useUser } from './UserContext';

const RecommendationContext = createContext();

export const RecommendationProvider = ({ children }) => {
  const user = useUser();
  const { mockUser } = user;

  const [recommendations, setRecommendations] = useState([]);

  const addRecommendation = (text) => {
    const newRecommendation = {
      id: Date.now(),
      author: {
        name: mockUser.name,
        photo: mockUser.photo,
        position: mockUser.position,
        company: mockUser.company,
      },
      date: format(new Date(), 'MMMM d, yyyy'),
      content: text,
    };

    setRecommendations((prev) => [newRecommendation, ...prev]);
  };

  const removeRecommendation = (id, userName) => {
    setRecommendations((prev) =>
      prev.filter((rec) => rec.id !== id || rec.author.name !== userName)
    );
  };

  const editRecommendation = (id, newText) => {
    setRecommendations((prev) =>
      prev.map((recommendation) =>
        recommendation.id === id
          ? { ...recommendation, content: newText }
          : recommendation
      )
    );
  };

  return (
    <RecommendationContext.Provider
      value={{
        recommendations,
        addRecommendation,
        removeRecommendation,
        editRecommendation,
      }}
    >
      {children}
    </RecommendationContext.Provider>
  );
};

export const useRecommendations = () => useContext(RecommendationContext);

export { RecommendationContext };
