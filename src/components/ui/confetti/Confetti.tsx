'use client';
import { useLikesStore } from '@/store';
import { useEffect, useState } from 'react';
import ReactConfetti from 'react-confetti';
import { useWindowSize } from 'react-use';

export const Confetti = () => {
  const { liked, likedOnSession } = useLikesStore();
  const { width, height } = useWindowSize();

  return (
    <div className="confetti fixed w-full h-full pointer-events-none">
      {liked && likedOnSession && (
        <ReactConfetti
          colors={['#FFF7D6', '#00B2FF']}
          recycle={false}
          height={height}
          width={width - 20}
        />
      )}
    </div>
  );
};
