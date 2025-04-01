import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RecommendationItem from '../components/RecommendationItem';
import { UserProvider } from '../context/UserContext';
import { RecommendationContext } from '../context/RecommendationContext';

const mockUser = {
  name: 'Daniel Hernández',
  photo: '/avatar.jpg',
  position: 'Frontend Developer',
  company: 'Nova Talent',
};

const mockRecommendation = {
  id: 1,
  author: { ...mockUser },
  date: 'April 1, 2025',
  content: 'A great collaborator with more than 50 characters indeed!',
};

const renderWithContext = (valueOverrides = {}) => {
  const editRecommendation = jest.fn();
  const removeRecommendation = jest.fn();

  const contextValue = {
    recommendations: [mockRecommendation],
    editRecommendation,
    removeRecommendation,
    ...valueOverrides,
  };

  return {
    editRecommendation,
    removeRecommendation,
    ...render(
      <UserProvider>
        <RecommendationContext.Provider value={contextValue}>
          <RecommendationItem rec={mockRecommendation} />
        </RecommendationContext.Provider>
      </UserProvider>
    ),
  };
};

describe('RecommendationItem', () => {
  test('renders author and content', () => {
    renderWithContext();

    expect(screen.getByText(mockUser.name)).toBeInTheDocument();
    expect(screen.getByText(mockRecommendation.content)).toBeInTheDocument();
  });

  test('shows edit and delete buttons if user is author', () => {
    renderWithContext();

    expect(screen.getByRole('button', { name: /edit/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /delete/i })).toBeInTheDocument();
  });

  test('calls removeRecommendation on delete click', () => {
    const { removeRecommendation } = renderWithContext();

    const deleteButton = screen.getByRole('button', { name: /delete/i });
    fireEvent.click(deleteButton);

    expect(removeRecommendation).toHaveBeenCalledWith(
      mockRecommendation.id,
      mockUser.name
    );
  });

  test('enters edit mode on edit click and calls editRecommendation on blur', () => {
    const { editRecommendation } = renderWithContext();

    fireEvent.click(screen.getByRole('button', { name: /edit/i }));

    const textarea = screen.getByRole('textbox');
    fireEvent.change(textarea, {
      target: { value: 'Updated content with more than 50 chars' },
    });
    fireEvent.blur(textarea);

    expect(editRecommendation).toHaveBeenCalledWith(
      mockRecommendation.id,
      'Updated content with more than 50 chars'
    );
  });
});
