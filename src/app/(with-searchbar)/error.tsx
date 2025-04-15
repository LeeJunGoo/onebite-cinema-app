'use client';

import { useRouter } from 'next/navigation';
import React, { startTransition, useEffect } from 'react';

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  const router = useRouter();

  const handleErrorOnClick = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  useEffect(() => {
    console.error(error.message);
  }, [error]);

  return (
    <>
      <main className="text-white min-h-screen">
        <div className="flex flex-col gap-[10px]">
          <h1 className="text-2xl font-bold">{`현재 페이지에서 에러가 발생 했습니다. 다시 시도해주세요 .`}</h1>
          <button className="font-bold border-1 rounded-[5px] p-2 my-auto w-full h-[60px]" onClick={handleErrorOnClick}>
            다시 시도
          </button>
        </div>
      </main>
    </>
  );
};

export default Error;
