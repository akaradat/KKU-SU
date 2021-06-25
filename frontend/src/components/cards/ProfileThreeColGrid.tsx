import React, { useState, ReactElement, useEffect } from 'react';
import axios from 'axios';
import tw from 'twin.macro';
import styled from 'styled-components';
import { css } from 'styled-components/macro';
import { Container, ContentWithPaddingXl } from 'components/misc/Layouts';
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from 'components/misc/Headings';
import { SectionDescription } from 'components/misc/Typography';
import { ReactComponent as FacebookIcon } from 'images/facebook-icon.svg';
import { ReactComponent as TwitterIcon } from 'images/twitter-icon.svg';
import { ReactComponent as IgIcon } from 'images/star-icon.svg';

const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`mx-auto text-center`;

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`;
const Card = tw.div`cursor-pointer mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`;
const CardImage = styled.div`
  ${(props) =>
    css`
      background-image: url('${props.imageSrc}');
    `}
  ${tw`w-64 h-64 bg-contain bg-center rounded`}
`;
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  9
`;

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-primary-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`;

type Props = {
  heading?: string;
  subheading?: string;
  description?: string;
  // cards?: {

  // }[];
};

type cardType = {
  title: string;
  detail: string;
  img: string;
  link: string;
};
export default ({
  heading = 'ผู้สนับสนุน',
  subheading = '',
  description = '',
}: Props): ReactElement => {
  const mockCards = [
    {
      title: 'Soulmate',
      detail: 'สิ่งของ สื่อรัก',
      img: 'https://thumbs.dreamstime.com/b/black-cupid-b-valentine-love-vector-168795221.jpg',
      link: 'https://www.facebook.com',
    },
  ];

  const [cards, setCards] = useState<cardType[]>([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_DOMAIN}/sponsors`)
      .then(({ data }) => {
        if (data.data.length > 0) {
          setCards(data.data);
        } else {
          setCards(mockCards);
        }
      });
  }, []);

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading>}
          {description && <Description>{description}</Description>}
        </HeadingContainer>
        <Cards>
          {cards.map((card, index) => (
            <Card
              key={index}
              onClick={() => {
                window.open(card.link, '_blank');
              }}
            >
              <CardImage imageSrc={card.img} />
              <CardContent>
                <span className="position">{card.detail}</span>
                <span className="name">{card.title}</span>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};
