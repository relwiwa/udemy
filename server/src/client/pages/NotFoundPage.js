import React from 'react';

// staticContext won't exist in browser environment
const NotFoundPage = ({ staticContext = {} }) => {
  /*  if this component gets called, requested route doesn't
      exist, so set notFound property on staticContext property
      (context property of StaticRouter) to true, so it can
      be handled when preparing server response in server.js */
  staticContext.notFound = true;

  return <h1>This route was not found</h1>;
};

export default {
  component: NotFoundPage,
}
