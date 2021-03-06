import AnimationRevealPage from 'helpers/AnimationRevealPage';
import Hero from 'components/hero/TwoColumnWithInput';
import Footer from 'components/footers/MiniCenteredFooter';
import Event from 'components/cards/ThreeColSlider';
import CheckEvent from 'components/faqs/SimpleWithSideImage';
import Sponsor from 'components/cards/ProfileThreeColGrid';
import Register from 'components/forms/TwoColContactUsWithIllustrationFullForm';
import { ReactElement } from 'react';

export default (): ReactElement => (
  <>
    <AnimationRevealPage disabled>
      <Hero roundedHeaderButton={true} />
      <Event />
      <CheckEvent heading="ตรวจสอบกิจกรรม" description="" />
      <Register />
      <Sponsor />
      <Footer />
    </AnimationRevealPage>
  </>
);
