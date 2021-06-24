import React, { ChangeEvent, memo, useState, VFC } from "react";
import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

export const Login: VFC = memo(() => {
  const { login, loading } = useAuth();

  const [usrId, setUsrId] = useState(""); // 初期値で値が推測されるため型指定がなくても大丈夫

  // テキストボックスのイベントの型指定はChangeEvent<HTMLInputElement>で覚えておく
  const onChangeUsrId = (e: ChangeEvent<HTMLInputElement>) =>
    setUsrId(e.target.value);

  const onClickLogin = () => login(usrId);

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} /> {/* 区切り線 */}
        {/* 囲んだ要素を等間隔に配置できる */}
        <Stack spacing={6} py={4} px={10}>
          <Input
            placeholder="ユーザーID"
            value={usrId}
            onChange={onChangeUsrId}
          />
          <PrimaryButton
            disabled={usrId === ""}
            loading={loading}
            onClick={onClickLogin}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
