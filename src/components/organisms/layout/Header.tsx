import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import React, { memo, VFC } from "react";

import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: VFC = memo(() => {
  // isOpen:trueの場合対象のコンポーネントを表示する
  // onOpen:isOpenにtrueを設定する
  // onClose:isOpenにfalseを設定する
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex // FlexBox
        as="nav" // 何のタグか指定できる
        bg="teal.500" // 背景色
        color="gray.50" //　文字色
        align="center" // align-items
        justify="space-between" // justify-content
        padding={{ base: 3, md: 5 }} // 公式ページのDefault Theme:Spacing参照
      >
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
          {/* h1やh2みたいな使い方 */}
          {/* fontsize base=基本画面サイズ md=画面サイズが基本から"48em"以上 公式ページ(Responsive Styles) */}
          {/* fontsizeの設定値　md:1倍　lg:1.125倍 */}
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontsize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }} //　画面のサイズに応じて表示を切り替えている
        >
          {/* Box=divタグみたいなもの pr=padding-right */}
          <Box pr={4}>
            <Link>ユーザー一覧</Link>
          </Box>
          <Link>設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer onClose={onClose} isOpen={isOpen} />
    </>
  );
});
