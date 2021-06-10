import AnimationRevealPage from 'helpers/AnimationRevealPage';
import Hero from 'components/hero/TwoColumnWithInput';
import Footer from 'components/footers/MiniCenteredFooter';
import ThreeColSlider from 'components/cards/ThreeColSlider';
import SimpleWithSideImageFAQS from 'components/faqs/SimpleWithSideImage';
import ProfileThreeColGridCards from 'components/cards/ProfileThreeColGrid';
import TwoColContactUsFullForm from 'components/forms/TwoColContactUsWithIllustrationFullForm';
import { FunctionComponent } from 'react';

const KkuLandingPage: FunctionComponent = () => (
  <>
    <AnimationRevealPage disabled>
      <Hero roundedHeaderButton={true} />
      <ThreeColSlider />
      <SimpleWithSideImageFAQS heading="ตรวจสอบกิจกรรม" description="" />
      <TwoColContactUsFullForm />
      <ProfileThreeColGridCards />
      <Footer />
    </AnimationRevealPage>
  </>
);

export default KkuLandingPage;
