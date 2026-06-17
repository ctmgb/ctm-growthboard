
"use client";

import React from "react";

type ErrorBoundaryProps = {
  children: React.ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("CTM GrowthBoard Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="flex min-h-screen items-center justify-center p-6">
          <div className="ctm-card max-w-md text-center">
            <h1 className="mb-2 text-2xl font-bold">
              Something went wrong
            </h1>

            <p className="mb-4 text-slate-600">
              The CTM GrowthBoard encountered an unexpected error.
            </p>

            <button
              type="button"
              onClick={() => window.location.reload()}
              className="rounded-xl bg-blue-600 px-4 py-2 font-semibold text-white"
            >
              Reload Application
            </button>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

