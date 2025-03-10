// components/Camera/ErrorBoundary.tsx
"use client";

import React, { ReactNode, ErrorInfo } from "react";
// import { useToast } from "../hooks/useToast";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error Boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-100 text-red-700 rounded">
          <h2 className="text-xl font-bold mb-2">Something went wrong</h2>
          <p>Please refresh the page and try again</p>
        </div>
      );
    }

    return this.props.children;
  }
}
