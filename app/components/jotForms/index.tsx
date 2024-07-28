'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';

const Index = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !router.isReady) return;

    const handleRouteChange = () => {
      const scriptElement = document.querySelector('script[src="https://form.jotform.com/jsform/241952488575067"]');
      if (scriptElement) {
        scriptElement.remove();
      }
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [isMounted, router.isReady, router.events]);

  return (
    <div>
      {isMounted && (
        <Script type="text/javascript" src="https://form.jotform.com/jsform/241952488575067" />
      )}
    </div>
  );
}

export default Index;
