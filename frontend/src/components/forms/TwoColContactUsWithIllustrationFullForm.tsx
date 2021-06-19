import React, { ReactElement } from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { css } from 'styled-components/macro'; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from 'components/misc/Headings';
import { PrimaryButton as PrimaryButtonBase } from 'components/misc/Buttons';
import EmailIllustrationSrc from 'images/email-illustration.svg';

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`;
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`;

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`;
type Props = {
  subheading?: string;
  heading?: string | ReactElement;
  description?: string;
  submitButtonText?: string;
  formAction?: string;
  formMethod?: string;
  textOnLeft?: boolean;
};

export default ({
  subheading = 'WELCOME',
  heading = (
    <>
      ลงทะเบียน <span tw="text-primary-500">น้องใหม่</span>
      <wbr /> ที่น่ารัก
    </>
  ),
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  submitButtonText = 'ลงทะเบียน',
  formAction = '#',
  formMethod = 'get',
  textOnLeft = true,
}: Props): ReactElement => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container id="register">
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <Form action={formAction} method={formMethod}>
              <Input type="text" name="email" placeholder="ชื่อ นามสกุล" />
              <Input type="text" name="name" placeholder="ชื่อเล่น" />
              <Input type="email" name="name" placeholder="เมล์" />
              <Input
                type="text"
                name="subject"
                placeholder="รหัสนักศึกษา เช่น 643020112-x"
              />
              <Input type="text" name="subject" placeholder="คณะ" />
              <Input type="text" name="subject" placeholder="สาขา" />
              <Input type="text" name="subject" placeholder="เบอร์โทรติดต่อ" />
              <Input type="text" name="subject" placeholder="Facebook" />
              <SubmitButton type="submit">{submitButtonText}</SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
