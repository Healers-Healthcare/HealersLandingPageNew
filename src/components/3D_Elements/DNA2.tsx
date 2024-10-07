import Spline from '@splinetool/react-spline/next';

export default function DNA2({ className = "" }) {
  return (
    <div className={`hidden md:block w-full h-[90%]  ${className}`}>
      <Spline
        scene="https://prod.spline.design/oUvTkjOCNkBua9di/scene.splinecode"
      />
    </div>
  );
}