import { H4, H5, Text } from "@/modules/common/components/Typography";
import { useUser } from "@/modules/common/hooks/useUserStore";
import styled from "@emotion/styled";
import { CaretLeft } from "@phosphor-icons/react";
import { Button, Input } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";

const EditPassword = () => {
  const { data: user } = useUser();
  const router = useRouter();

  const onClickBackButton = () => {
    void router.back();
  };

  return (
    <>
      <Head>
        <title>MeeOrder | EditUsername</title>
        <meta name="description" content="MeeOrder Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ScreenContainer>
        <Container>
          <BackButtonContainer onClick={() => onClickBackButton()}>
            <CaretLeft size={32} />
            <Text>กลับสู่หน้าโพรไฟล์</Text>
          </BackButtonContainer>
          <ProfileContainer>
            <H4>แก้ไขรหัสผ่าน</H4>
            <Text type="secondary">ป้อนรหัสผ่านปัจจุบันและรหัสผ่านใหม่</Text>
            <FieldContainer>
              <UsernameContainer>
                <H5
                  style={{
                    marginBottom: "8px",
                  }}
                >
                  รหัสผ่านปัจจุบัน
                </H5>
                <Input
                  style={{
                    marginBottom: "8px",
                    width: "100%",
                  }}
                  placeholder="example"
                ></Input>
              </UsernameContainer>
              <PasswordContainer>
                <H5
                  style={{
                    marginBottom: "8px",
                  }}
                >
                  รหัสผ่านใหม่
                </H5>
                <Input
                  style={{
                    marginBottom: "8px",
                    width: "100%",
                  }}
                  placeholder="example"
                ></Input>
              </PasswordContainer>
              <PasswordContainer>
                <H5
                  style={{
                    marginBottom: "8px",
                  }}
                >
                  ยืนยันรหัสผ่านใหม่
                </H5>
                <Input
                  style={{
                    marginBottom: "8px",
                    width: "100%",
                  }}
                  placeholder="example"
                ></Input>
              </PasswordContainer>
            </FieldContainer>
          </ProfileContainer>
        </Container>
      </ScreenContainer>
    </>
  );
};

export default EditPassword;

const ScreenContainer = styled.div`
  min-height: 100dvh;
  max-width: 500px;
  margin: 0 auto;
  background-color: #fafafa;
`;

const Container = styled.div`
  min-height: 100dvh;
  height: 100%;
  width: 100%;
  padding-top: 16px;
  padding-inline: 20px;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 72.33%,
      ${(props) => props.theme.antd.colorPrimaryBorder} 115.11%
    ),
    linear-gradient(
      180deg,
      ${(props) => props.theme.antd.colorPrimaryBorder} -27.67%,
      #fff 18.01%
    );
`;

const BackButtonContainer = styled(Button)`
  display: flex;
  justify-content: space-between;
  width: 30%;
  align-items: center;
  min-width: 175px;
  margin-bottom: 12px;
  border: none;
  box-shadow: none;
  background: none;
`;

const ProfileContainer = styled.div`
  display: flex;
  padding: 8px 0px;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  background: #fff;
`;

const UsernameContainer = styled.div`
  margin-bottom: 12px;
  width: 100%;
`;

const PasswordContainer = styled.div`
  margin-bottom: 12px;
  width: 100%;
`;

const FieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;
`;
