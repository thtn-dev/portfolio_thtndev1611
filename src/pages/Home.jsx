import Hello from '@/components/sections/Hello';
import SkillsSection from '@/components/sections/Skills';
import { Fragment } from 'react';

function Home() {
  return (
    <Fragment>
      <Hello />
      <SkillsSection/>
    </Fragment>
  );
}

export default Home;
