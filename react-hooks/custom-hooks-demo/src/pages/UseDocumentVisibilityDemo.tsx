import { useEffect } from 'react';

import { useDocumentVisibility } from '../hooks'

const UseDocumentVisibilityDemo = () => {
  const documentVisibility = useDocumentVisibility();

  useEffect(() => {
    console.log('documentVisibility: ', documentVisibility);
  }, [documentVisibility]);

  return (
    <div>
      <h2>
        useDocumentVisibility
      </h2>
      <p>
        documentVisibility: {documentVisibility}
      </p>
    </div>
  )
}

export default UseDocumentVisibilityDemo