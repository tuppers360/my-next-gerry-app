import { format, parseISO } from 'date-fns';

import Link from 'next/link';

//TODO - add views for each article
//import useSWR from 'swr';
//import format from 'comma-number';

//import fetcher from '@/lib/fetcher';

const Post = ({ title, summary, publishedAt, author, image, slug }) => {
  //   const { data } = useSWR(`/api/views/${slug}`, fetcher);
  //   const views = data?.total;
  return (
    <article className="flex flex-col rounded-lg shadow-lg overflow-hidden border-gray-300 border">
      <div className="flex-shrink-0">
        <Link href={`/stories/${slug}`}>
          <a>
            <img
              className="h-56 lg:h-72 w-full object-cover"
              src={image}
              alt=""
            />
          </a>
        </Link>
      </div>
      <div className="flex-1 bg-gray-50 px-6 py-3 flex flex-col justify-between">
        <div className="h-0 flex-1">
          <Link href={`/stories/${slug}`}>
            <a>
              <h1 className="text-2xl font-bold text-cyan-800 mt-4 hover:underline">
                {title}
              </h1>
            </a>
          </Link>
          <p className="text-sm font-base text-gray-500 italic mt-2">
            Written by
            <span className="ml-1 text-sm text-gray-500">{author}</span>
          </p>
          <p className="mt-3 text-base font-medium text-gray-700">{summary}</p>
        </div>

        <div className="mt-6 flex text-sm justify-between text-gray-500">
          <div className="inline-flex items-center">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="eye"
              className="inline-block w-5 h-5 mr-2"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"
              ></path>
            </svg>
            1 Views
          </div>
          <div>
            Published -
            <span className="ml-1 text-sm text-gray-500">
              {format(parseISO(publishedAt), 'MMMM dd, yyyy')}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Post;