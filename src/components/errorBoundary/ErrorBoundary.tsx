import React, { ErrorInfo, ReactNode } from 'react';
import { StyledH1 } from './styled';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can log the error to an error reporting service
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <StyledH1>An unknown error occurred. Please try again later.</StyledH1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
