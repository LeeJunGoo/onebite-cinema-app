import React from 'react';
import MoviePage from '@/app/movie/[id]/page';
import Modal from '@/components/common/Modal';

const page = ({ params }: { params: Promise<{ id: string }> }) => {
  return (
    <>
      <Modal>
        <MoviePage params={params} />
      </Modal>
    </>
  );
};

export default page;
