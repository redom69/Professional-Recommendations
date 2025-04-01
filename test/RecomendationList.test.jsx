import React, { act } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RecommendationList from '../components/RecommendationList';
import { UserProvider } from '../context/UserContext';
import { RecommendationContext } from '../context/RecommendationContext';

// 🔧 Utilidad para envolver con mock de contexto
const renderWithMockRecommendations = (
  recommendations,
  valueOverrides = {}
) => {
  const mockContextValue = {
    recommendations,
    editRecommendation: jest.fn(),
    removeRecommendation: jest.fn(),
    ...valueOverrides,
  };

  return render(
    <UserProvider>
      <RecommendationContext.Provider value={mockContextValue}>
        <RecommendationList />
      </RecommendationContext.Provider>
    </UserProvider>
  );
};

describe('RecommendationList', () => {
  test('shows fallback message when list is empty', () => {
    renderWithMockRecommendations([]);

    expect(screen.getByText(/no recommendations yet/i)).toBeInTheDocument();
  });

  test('renders a recommendation item if present', () => {
    const mockRec = {
      id: 1,
      author: {
        name: 'Daniel Hernández',
        photo: '/avatar.jpg',
        position: 'Frontend Developer',
        company: 'Nova Talent',
      },
      date: 'April 1, 2025',
      content: 'This is a mock recommendation with more than 50 characters.',
    };

    renderWithMockRecommendations([mockRec]);

    expect(screen.getByText(mockRec.author.name)).toBeInTheDocument();
    expect(screen.getByText(mockRec.content)).toBeInTheDocument();
  });
});
