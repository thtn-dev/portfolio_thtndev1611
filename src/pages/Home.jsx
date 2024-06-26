import About from '@/components/sections/About';
import Hello from '@/components/sections/Hello';
import { Fragment } from 'react';

function Home() {
  return (
    <Fragment>
      <Hello />
      <About />
    </Fragment>
  );
}

export default Home;
