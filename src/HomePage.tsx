import { ScriptProvider } from './ScriptProvider';

import Banner from './Banner';
import FooterTest from './FooterTest';
import HeaderTest from './HeaderTest';
import RandomJobs from './RandomJobs';
import VideoHome from './VideoHome';
import WorkingProcess from './WorkingProcess';

export default function HomePage() {
  return (
    <>
      <ScriptProvider />
      <HeaderTest />
      <Banner />
      <RandomJobs />
      <VideoHome />
      <WorkingProcess />
      <FooterTest />
    </>
  );
}
