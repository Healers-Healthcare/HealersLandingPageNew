import Spline from '@splinetool/react-spline/next';

export default function DNA2({ className = "" }) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Spline
        scene="https://prod.spline.design/oUvTkjOCNkBua9di/scene.splinecode"
      />
    </div>
  );
}