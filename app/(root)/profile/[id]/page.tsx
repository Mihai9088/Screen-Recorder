import Header from '@/components/Header';
import VideoCard from '@/components/VideoCard';
import { dummyCards } from '@/constants';
import React from 'react';

const Page = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;
  console.log(id);
  return (
    <div className="wrapper page">
      <Header title="Mihai | MV" subHeader="mihai@yahoo.com" userImg="/assets/images/user.jpg" />
      <section className="video-grid">
        {dummyCards.map((card) => (
          <VideoCard key={card.id} {...card} />
        ))}
      </section>
    </div>
  );
};

export default Page;
