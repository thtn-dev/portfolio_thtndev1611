import 'sanitize.css';
import { withErrorHandler } from './error_handling';
import AppErrorFallback from './error_handling/AppErrorFallback';

Promise.all([import('@/Root.jsx'), import('@/App.jsx')]).then(([Root, { default: App }]) => {
  Root.render(withErrorHandler(App, AppErrorFallback));
});
