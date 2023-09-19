"use client";
import React from "react";
interface Props {
  error: Error;
  reset: () => void;
}
const ErrorPage = ({ error, reset }: Props) => {
  // Use logging service like sentry
  console.log(error.message);
  return (
    <>
      <div>An unexpected error has occurred:</div>
      {/* Use this sparingly or our logs will suffer  */}
      <button onClick={() => reset()} className="btn">
        Retry?
      </button>
    </>
  );
};

export default ErrorPage;
