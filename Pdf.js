import React, { useEffect, useRef } from 'react';
import WebViewer from '@pdftron/webviewer';

const WebViewerComponent = () => {
  const viewerDiv = useRef(null);

  useEffect(() => {
    WebViewer(
      {
        path: '/lib', // Path to the WebViewer lib folder
        initialDoc: '/docs/file1.pdf', // Replace with your document URL
        enableSemanticComparison: true, // Enables semantic text comparison
      },
      viewerDiv.current
    ).then((instance) => {
      const { docViewer, annotManager } = instance;

      // Enable semantic text comparison
      docViewer.loadDocument('/docs/file2.pdf', {
        comparison: {
          type: 'semantic', // Specify the comparison type
        },
      });

      instance.UI.openElements(['comparisonPanel']);
    });
  }, []);

  return <div className="webviewer" ref={viewerDiv} style={{ height: '100vh' }} />;
};

export default WebViewerComponent;
