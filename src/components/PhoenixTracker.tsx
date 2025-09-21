"use client";

import { useEffect } from "react";

export function PhoenixTracker() {
  useEffect(() => {
    console.log('🎯 PhoenixTracker component mounted');
    
    // Listen for messages from parent frame (toggle commands)
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === 'phoenix-command') {
        console.log('📨 PhoenixTracker received command:', event.data);
        
        // Forward command to tracking client
        if (typeof window !== 'undefined' && window.__PHOENIX_TRACKING__) {
          const trackingClient = window.__PHOENIX_TRACKING__;
          if (trackingClient.handleCommand) {
            trackingClient.handleCommand(event.data);
          }
        } else {
          console.warn('⚠️ Phoenix tracking client not found');
        }
      }
    };

    window.addEventListener('message', handleMessage);
    
    // Cleanup
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return null;
}