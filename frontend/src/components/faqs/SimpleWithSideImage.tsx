import React, { ReactElement, useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import tw from 'twin.macro';
import styled from 'styled-components';
import { css } from 'styled-components/macro'; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from 'components/misc/Headings';
import { ReactComponent as ExternalLink } from 'feather-icons/dist/icons/external-link.svg';
import { Container } from 'components/misc/Layouts';

import DesignIllustration from '../../images/team-illustration-3.svg';

const PrimaryBackgroundContainer = tw(
  Container
)`-mx-8 px-8 bg-primary-900 text-gray-100`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;
const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;

const TwoColumn = tw.div`flex`;
const Column = tw.div``;

const FAQContent = tw.div`lg:ml-12`;
const Subheading = tw(SubheadingBase)`mb-4 text-center lg:text-left`;
const Heading = tw(SectionHeading)`lg:text-left`;
const Description = tw.p`max-w-xl text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4 text-secondary-100`;

const FAQSContainer = tw.dl`mt-12`;
const FAQ = tw.div`cursor-pointer mt-8 select-none border lg:border-0 px-8 py-4 lg:p-0 rounded-lg lg:rounded-none`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = styled.span`
  ${tw`ml-2  text-gray-100 p-1 rounded-full group-hover:bg-primary-700 group-hover:text-gray-200 transition duration-300`}
  svg {
    ${tw`w-4 h-4`}
  }
`;
const Answer = motion(
  tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`
);

type Props = {
  subheading?: string;
  heading?: string;
  description?: string;
  faqs?:
    | {
        question: string;
        answer: string;
      }[]
    | null;
};

type faqType = {
  title: string;
  detail: string;
  link?: string;
};

export default ({
  subheading = '',
  heading = 'Questions',
  description = 'Here are some frequently asked questions about our hotels from our loving customers. Should you have any other questions, feel free to reach out via the contact form below.',
}: Props): ReactElement => {
  /*
   * You can modify FAQs either by modifying the below defaultFaqs array or by passing a custom array of FAQs using
   * the faqs prop
   */
  const defaultFaqs = [
    {
      title: 'กิจกรรมที่ 1: Incididunt incididunt labore.',
      detail:
        'Yes, it is, if you have a membership with us. Otherwise it is charged as per the menu. Some limits do apply as to how much items can be included in your lunch. This limit is enough for any one person and merely exists to discourage abusal of the system.',
    },
    {
      title: 'กิจกรรมที่ 2: Mollit dolor aliquip aliqua deserunt.',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      title: 'กิจกรรมที่ 3: Elit nulla commodo aliqua ipsum quis dolor.',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      title:
        'กิจกรรมที่ 4: Dolore excepteur quis laborum voluptate duis ea nostrud anim ad dolore.',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];
  const [faqs, setFaqs] = useState<faqType[]>([]);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_DOMAIN}/events/findEventByType/check`
      )
      .then(({ data }) => {
        if (data.data.length > 0) {
          setFaqs(data.data);
        } else {
          setFaqs(defaultFaqs);
        }
      });
  }, []);

  return (
    <PrimaryBackgroundContainer id="checkEvent">
      <Content>
        <TwoColumn>
          <Column tw="hidden lg:block w-5/12 flex-shrink-0">
            <IllustrationContainer>
              <img
                tw="min-w-0 w-full max-w-lg xl:max-w-3xl"
                src={DesignIllustration}
                alt="Design Illustration"
              />
            </IllustrationContainer>
          </Column>
          <Column>
            <FAQContent>
              {subheading ? <Subheading>{subheading}</Subheading> : null}
              <Heading>{heading}</Heading>
              <Description>{description}</Description>
              <FAQSContainer>
                {faqs.map((faq, index) => (
                  <FAQ
                    key={index}
                    onClick={() => {
                      window.open(faq.link, '_blank');
                    }}
                    className="group"
                  >
                    <Question>
                      <QuestionText>{faq.title}</QuestionText>
                      <QuestionToggleIcon>
                        <ExternalLink />
                      </QuestionToggleIcon>
                    </Question>
                    <Answer
                      variants={{
                        open: { opacity: 1, height: 'auto', marginTop: '16px' },
                        collapsed: { opacity: 0, height: 0, marginTop: '0px' },
                      }}
                      initial="collapsed"
                      animate={'collapsed'}
                      transition={{
                        duration: 0.3,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                    >
                      {faq.detail}
                    </Answer>
                  </FAQ>
                ))}
              </FAQSContainer>
            </FAQContent>
          </Column>
        </TwoColumn>
      </Content>
    </PrimaryBackgroundContainer>
  );
};
