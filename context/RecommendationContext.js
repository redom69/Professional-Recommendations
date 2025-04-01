import { createContext, useContext, useState } from 'react';
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

  return (
    <RecommendationContext.Provider
      value={{ recommendations, addRecommendation }}
    >
      {children}
    </RecommendationContext.Provider>
  );
};

export const useRecommendations = () => useContext(RecommendationContext);
