import React from 'react';

interface TabHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function TabHeader({ children, ...rest }: TabHeaderProps) {
  return (
    <div
      className='flex w-full flex-row justify-around gap-4 lg:w-fit lg:flex-col lg:justify-normal lg:gap-6'
      id={rest.id}
    >
      {children}
    </div>
  );
}