import { Button } from '@noodle/design-system';
import { useToggleTheme } from '@noodle/stitches';
import { Star } from '@prisma/client';
import { GetServerSideProps, NextPage } from 'next';
import prisma from '../utils/prisma';
import { useQuery } from '../utils/trpc';

type HomeProps = {
  readonly stars: Star[];
};

const Home: NextPage<HomeProps> = ({ stars }) => {
  const { data, isLoading, error } = useQuery([
    'hello.getGreeting',
    { greeting: 'noodle' },
  ]);
  const { toggleTheme } = useToggleTheme();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Hello World</h1>
      <button type="button" onClick={toggleTheme}>
        Toggle Theme
      </button>
      <Button>I&apos;m from the design-system lib</Button>
      {data && <p>{data.greeting}</p>}
      {stars.length > 0 ? (
        <ul>
          {stars.map((star) => (
            <li key={star.id}>{star.name}</li>
          ))}
        </ul>
      ) : (
        <p>No stars found :(</p>
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const stars = await prisma.star.findMany();

  return {
    props: {
      stars,
    },
  };
};

export default Home;
