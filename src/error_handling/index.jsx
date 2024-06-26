import { ErrorBoundary } from 'react-error-boundary';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Unknown';
}

function withErrorHandler(Component, FallbackComponent) {
  function ComponentWithErrorHandling(props) {
    return (
      <ErrorBoundary FallbackComponent={FallbackComponent}>
        <Component {...props} />
      </ErrorBoundary>
    );
  }

  ComponentWithErrorHandling.displayName = `withErrorHandler(${getDisplayName(Component)})`;

  return ComponentWithErrorHandling;
}

export { withErrorHandler };
