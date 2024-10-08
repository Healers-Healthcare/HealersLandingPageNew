import Spline from '@splinetool/react-spline/next';

export default function DNA2({ className = "" }) {
  return (
    <div className={`hidden md:block w-full h-full  mx-auto ${className}`}>
      <div className="relative w-full h-full max-h-[1080px]">
        <Spline
          scene="https://prod.spline.design/oUvTkjOCNkBua9di/scene.splinecode"
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
    </div>
  );
}