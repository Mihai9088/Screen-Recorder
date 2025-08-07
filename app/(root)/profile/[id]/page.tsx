import Header from '@/components/Header';
import React from 'react';

const Page = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;

  return (
    <div className="wrapper page">
      <Header title="Mihai | MV" subHeader="mihai@yahoo.com" userImg="/assets/images/user.jpg" />
      <h1 className="text-2xl font-karla">user id : {id}</h1>
    </div>
  );
};

export default Page;
