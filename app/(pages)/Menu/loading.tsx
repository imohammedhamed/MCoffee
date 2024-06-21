import React from 'react';

export default function Loading() {
  return (
    <div className=" absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4">
      <span className="loading loading-ring loading-lg text-primary"></span>
    </div>
  );
}

