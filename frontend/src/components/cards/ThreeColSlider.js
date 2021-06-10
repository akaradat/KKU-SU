/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import tw from 'twin.macro';
import styled from 'styled-components';
import { SectionHeading } from 'components/misc/Headings';
import { PrimaryButton as PrimaryButtonBase } from 'components/misc/Buttons';
import { ReactComponent as PriceIcon } from 'feather-icons/dist/icons/dollar-sign.svg';
import { ReactComponent as LocationIcon } from 'feather-icons/dist/icons/map-pin.svg';
import { ReactComponent as StarIcon } from 'feather-icons/dist/icons/star.svg';
import { ReactComponent as ChevronLeftIcon } from 'feather-icons/dist/icons/chevron-left.svg';
import { ReactComponent as ChevronRightIcon } from 'feather-icons/dist/icons/chevron-right.svg';

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track {
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`,
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-500 fill-current`}
  }
`;
const Rating = tw.span`ml-2 font-bold`;

const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;

const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;

const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`;
export default () => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    console.log(1, sliderRef);
  }, [sliderRef]);

  /* Change this according to your needs */
  const cards = [
    {
      imageSrc:
        'https://www.matichon.co.th/wp-content/uploads/2018/08/S__7274521.jpg',
      title: 'ปิ้งไก่ ในตำนาน',
      description:
        'กิจกรรม ปิ้งไก่ ในตำนาน ระเบิดภูเขา เผากระท่อม พร้อมปิ้งไก่ พบกันที่ช่องเป็ดหมี เร็ว ๆ นี้',
      locationText: 'Rome, Italy',
      pricingText: 'USD 39/Day',
      rating: '4.8',
    },
    {
      imageSrc: 'https://entertain.teenee.com/thaistar/img3/1295030.jpg',
      title: 'คมแฝก',
      description:
        'กิจกรรมร้องเพลงประสานเสียงคมแฝก ตาต่อตา ฟันต่อฟัน ตีต่อตี ตี ตี ตีเข้าไป (ไม้ตายคมแฝก) ลูกผู้ชาย ใจนักเลง ไม่ข่มเหง รังแกใครก่อน',
      locationText: 'Ibiza, Spain',
      pricingText: 'USD 50/Day',
      rating: 4.9,
    },
    {
      imageSrc:
        'https://file.mk.co.kr/meet/neds/2020/03/image_readmed_2020_309413_15851148394137267.jpg',
      title: 'baby shark',
      description:
        'Baby shark, doo, doo, doo, doo, doo, doo Baby shark, doo, doo, doo, doo, doo, doo Baby shark, doo, doo, doo, doo, doo, doo',
      locationText: 'Palo Alto, CA',
      pricingText: 'USD 19/Day',
      rating: '5.0',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1571770095004-6b61b1cf308a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80',
      title: 'Hudak Homes',
      description:
        'Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.',
      locationText: 'Arizona, RAK',
      pricingText: 'USD 99/Day',
      rating: 4.5,
    },
  ];

  return (
    <Container id="event">
      <Content>
        <HeadingWithControl>
          <Heading>กิจกรรม</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}>
              <ChevronLeftIcon />
            </PrevButton>
            <NextButton onClick={sliderRef?.slickNext}>
              <ChevronRightIcon />
            </NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{card.title}</Title>
                  {/* <RatingsInfo>
                    <StarIcon />
                    <Rating>{card.rating}</Rating>
                  </RatingsInfo> */}
                </TitleReviewContainer>
                <Description>{card.description}</Description>
              </TextInfo>
              <PrimaryButton>ดูรายละเอียด</PrimaryButton>
            </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>
  );
};