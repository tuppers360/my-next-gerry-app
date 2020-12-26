import React, { FunctionComponent } from 'react';

type HeaderProps = {
  title?: string;
  heading: string;
  center?: boolean;
};

const PageHeaderSection: FunctionComponent<HeaderProps> = ({
  title,
  heading,
  children,
}) => {
  return (
    <div className="bg-gradient-to-r from-gray-200 to-gray-100 py-12 shadow-lg">
      <div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 text-center">
        <p className="text-gray-600 text-2xl font-extrabold uppercase">
          {title}
        </p>
        <h1 className="mt-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-900 text-4xl font-bold leading-tight">
          {heading}
        </h1>
        <div className="mt-6 text-lg font-semibold">{children}</div>
      </div>
    </div>
  );
};

export default PageHeaderSection;
