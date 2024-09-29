import Spline from '@splinetool/react-spline/next';

export default function Cubic() {
  return (
    <main className='overflow-x-hidden'>
      <Spline
        scene="https://prod.spline.design/KAWmCRqDgvzcqPzq/scene.splinecode" 
        width={600}
        height={600}
      />
    </main>
  );
}
