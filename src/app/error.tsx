"use client";

import { useEffect } from "react";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error(props: Props) {
  const { error, reset } = props;

  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="error-page">
      <h2>Something went wrong terribly</h2>
      <p className="text-red-600">Error occurred</p>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}
