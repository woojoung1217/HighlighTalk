import Link from 'next/link';
import React from 'react';

interface TestData {
  title: string;
  content: string;
  coin: number;
}

interface MainThemesProps {
  data: TestData;
}

function MainThemes({ data }: MainThemesProps) {
  return (
    <div className="card">
      <Link href="/">
        <h1>{data.title}</h1>
        <p>{data.content}</p>
        <div className="coin">
          <div className="coin-img"></div>
          {data.coin}
        </div>
      </Link>
    </div>
  );
}

export default MainThemes;