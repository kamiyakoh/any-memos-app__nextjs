'use client';
import { FC } from 'react';

interface Props {
  props: any[]; // eslint-disable-line
}

export const CLog: FC<Props> = ({ props }) => {
  props.forEach((prop) => console.log({ prop })); // eslint-disable-line

  return <div />;
};
