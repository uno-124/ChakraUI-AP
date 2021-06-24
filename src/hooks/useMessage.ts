import { useCallback } from "react";
import { useToast } from "@chakra-ui/react";

type Props = {
  title: string;
  // 型指定で受け取れる文字を制限している
  status: "info" | "warning" | "success" | "error";
};

export const useMessage = () => {
  const toast = useToast();

  const showMessage = useCallback(
    (props: Props) => {
      const { title, status } = props;
      toast({
        title,
        status,
        position: "top",
        duration: 2000, // 指定したミリ秒だけメッセージが残る
        isClosable: true // メッセージを閉じれるか
      });
    },
    [toast]
  );
  return { showMessage };
};
