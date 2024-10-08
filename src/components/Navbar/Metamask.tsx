import { useEffect, useRef } from 'react';
import ModelViewer, { ModelViewerInstance } from '@metamask/logo';

const MetaMaskLogo: React.FC = () => {
  const logoContainer = useRef<HTMLDivElement | null>(null);
  const viewerRef = useRef<ModelViewerInstance | null>(null); // Properly typed

  useEffect(() => {
    // Check if the viewer instance is already created
    if (!viewerRef.current) {
      const viewer = ModelViewer({
        pxNotRatio: true,
        width: 50,
        height: 50,
        followMouse: false,
        slowDrift: false,
      });

      viewerRef.current = viewer; // Store the viewer instance in the ref

      if (logoContainer.current) {
        logoContainer.current.appendChild(viewer.container);
      }

      viewer.lookAt({ x: 100, y: 100 });
      viewer.setFollowMouse(true);
    }

    // Cleanup to stop the animation when the component unmounts
    return () => {
      if (viewerRef.current) {
        viewerRef.current.stopAnimation();
      }
    };
  }, []);

  return <div id="logo-container" ref={logoContainer}></div>;
};

export default MetaMaskLogo;
