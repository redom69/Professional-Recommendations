// components/RecommendationItem.jsx
import { useUser } from '../context/UserContext';
import { useRecommendations } from '../context/RecommendationContext';
import { useState } from 'react';

export default function RecommendationItem({ rec }) {
  const { mockUser } = useUser();
  const { editRecommendation, removeRecommendation } = useRecommendations();
  const [editing, setEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(rec.content);

  const isOwn = rec.author.name === mockUser.name;

  return (
    <div className="bg-gray-50 border rounded p-5 shadow-sm">
      <div className="flex items-start justify-between">
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
        <span className="text-xs italic text-gray-400">{rec.date}</span>
      </div>

      {editing ? (
        <textarea
          className="w-full border p-2 rounded mt-4 text-gray-700"
          autoFocus
          rows={3}
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
          onBlur={() => {
            editRecommendation(rec.id, editedContent);
            setEditing(false);
          }}
        />
      ) : (
        <p className="text-gray-700 break-words whitespace-pre-line mt-4">
          {rec.content}
        </p>
      )}

      {isOwn && (
        <div className="flex justify-end gap-2 mt-4">
          <button
            className="flex items-center gap-1 px-3 py-1 text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded transition"
            onClick={() => setEditing(true)}
          >
            <i className="pi pi-pencil" />
            Edit
          </button>
          <button
            className="flex items-center gap-1 px-3 py-1 text-sm text-red-500 hover:text-red-700 hover:bg-red-50 rounded transition"
            onClick={() => removeRecommendation(rec.id, mockUser.name)}
          >
            <i className="pi pi-trash" />
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
