// app/not-found.js
'use client';

//  source: '/ping-pong-ball-tracking-system',
// destination: '/ping-pong-ball-tracking-and-projected-distance-calculation-system-for-data-modeling',
                


import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to homepage
    router.push('/');
  }, [router]);

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-3xl">Redirecting to the homepage...</h1>
    </div>
  );
}
