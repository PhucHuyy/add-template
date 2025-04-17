import { ScriptProvider } from '../config/ScriptProvider';

import Banner from '../components/HomePage/Banner';
import Footer from '../components/layout/Footer';
import RandomJobs from '../components/HomePage/RandomJobs';
import VideoHome from '../components/HomePage/VideoHome';
import WorkingProcess from '../components/HomePage/WorkingProcess';
import Header from '../components/layout/Header';

export default function HomePage() {
  return (
    <>
      <ScriptProvider />
      <Header />
      <Banner />
      <RandomJobs />
      <VideoHome />
      <WorkingProcess />
      <Footer />
    </>
  );
}
