import React, { ReactElement, useState } from 'react';
import tw from 'twin.macro';
import swal from 'sweetalert';
import styled from 'styled-components';
import { css } from 'styled-components/macro'; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from 'components/misc/Headings';
import { PrimaryButton as PrimaryButtonBase } from 'components/misc/Buttons';
import EmailIllustrationSrc from 'images/email-illustration.svg';
import axios from 'axios';

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
  textOnLeft?: boolean;
};

export default ({
  subheading = 'WELCOME',
  heading = (
    <>
      ลงทะเบียน <span tw="text-primary-500">เพื่อนใหม่</span>
      <wbr /> กาลพฤกษ์ ช่อที่ 58
    </>
  ),
  description = '',
  submitButtonText = 'ลงทะเบียน',
  textOnLeft = true,
}: Props): ReactElement => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [studentId, setStudentId] = useState('');
  const [faculty, setFaculty] = useState('');
  const [branch, setBranch] = useState('');
  const [tel, setTel] = useState('');
  const [facebook, setFacebook] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      !name ||
      !nickname ||
      !email ||
      !studentId ||
      !faculty ||
      !branch ||
      !tel ||
      !facebook
    ) {
      return swal('Error', 'กรุณากรอกข้อมูลให้ครบถ้วน', 'error');
    }

    const postData = {
      name,
      nickname,
      email,
      studentId,
      faculty,
      branch,
      tel,
      facebook,
    };

    axios
      .post(`${process.env.REACT_APP_BACKEND_DOMAIN}/users`, postData)
      .then(() => {
        swal(`ลงทะเบียนสำเร็จ`, ``, 'success');
        setName('');
        setNickname('');
        setEmail('');
        setStudentId('');
        setFaculty('');
        setBranch('');
        setTel('');
        setFacebook('');
      })
      .catch((err) => {
        const res = err.response;
        if (!res.data || !res.data.message) return;
        swal('Error', res.data.message, 'error');
      });
  };

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
            <Form onSubmit={onSubmit}>
              <Input
                type="text"
                name="nickname"
                placeholder="ชื่อ นามสกุล"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="text"
                name="name"
                placeholder="ชื่อเล่น"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
              <Input
                type="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="text"
                name="studentId"
                placeholder="รหัสนักศึกษา เช่น 643020112-x"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
              />
              <Input
                type="text"
                name="faculty"
                placeholder="คณะ"
                value={faculty}
                onChange={(e) => setFaculty(e.target.value)}
              />
              <Input
                type="text"
                name="branch"
                placeholder="สาขา"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
              />
              <Input
                type="text"
                name="tel"
                placeholder="เบอร์โทรติดต่อ"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
              />
              <Input
                type="text"
                name="facebook"
                placeholder="Facebook"
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
              />
              <SubmitButton type="submit">{submitButtonText}</SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
