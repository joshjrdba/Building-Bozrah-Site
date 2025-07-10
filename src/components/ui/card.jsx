import React from 'react';

export function Card({ children }) {
  return (
    <div className="rounded-2xl p-4 shadow-md bg-white border border-gray-200">
      {children}
    </div>
  );
}