import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  id: number;
  info: string;
}

const Poster: React.FC<IProps> = ({ info, id }) => {
  return (
    <div
      style={{ color: '#f4f1d0' }}
      // eslint-disable-next-line react/jsx-curly-brace-presence
      className={`max-w-xs ${
        id % 2 === 0 ? 'pr-20' : 'pl-20 '
      } flex-col justify-center hidden md:flex`}
    >
      <p className="text-7xl font-body1">{id < 10 ? `0${id}` : id}</p>
      <hr className="w-1/6 mt-8" />
      <p className="text-base tracking-widest my-4 font-body1 font-medium">
        {info}
      </p>
      <Link
        style={{ backgroundColor: '#1c1c1c' }}
        className="text-center uppercase w-44 p-3 shadow-lg font-medium text-lg tracking-widest inline-block transition-opacity focus:outline-none hover:opacity-90"
        to={`/articles/${id}`}
      >
        Learn More
      </Link>
    </div>
  );
};

export default Poster;
