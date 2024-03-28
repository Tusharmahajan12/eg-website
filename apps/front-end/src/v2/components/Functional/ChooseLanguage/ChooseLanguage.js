import {
  Center,
  VStack,
  Image,
  HStack,
  Text,
  Input,
  Stack,
  Box,
  Button,
  Pressable,
} from "native-base";
import React, { useEffect, useRef, useState } from "react";
import { FrontEndTypo, TitleCard, useWindowSize } from "@shiksha/common-lib";
import { setLanguage, getLanguage } from "v2/utils/Helper/JSHelper";
import Motif_EG from "../../../assets/Images/Logo/Motif_EG.svg";

export default function ChooseLanguage({ t, languageChanged }) {
  const [code, setCode] = useState(getLanguage() || "hi");
  const ref = useRef(null);
  const [width, height] = useWindowSize();
  const [langChanged, setLangChanged] = useState(false);
  useEffect(() => {
    setLanguage(code);
  }, [code]);
  useEffect(() => {
    if (langChanged) {
      languageChanged();
    }
  }, [langChanged]);

  return (
    <VStack>
      <Image
        mt="6"
        mb="10px"
        source={{
          uri: Motif_EG,
        }}
        w={width}
        h={height - ref?.current?.clientHeight}
      />
      <Box p="5" ref={ref}>
        <FrontEndTypo.H1
          fontSize={"22px"}
          lineHeight={"33px"}
          fontWeight={700}
          color={"textGreyColor.900"}
          textAlign={"center"}
        >
          {t("CHOOSE_LANGUAGE")}
        </FrontEndTypo.H1>
        <FrontEndTypo.H3
          pt="4"
          color="textGreyColor.750"
          textAlign={"center"}
          lineHeight="21px"
        >
          {t("PREFERED_LANGUAGE")}
        </FrontEndTypo.H3>

        <HStack space={4} mt={42}>
          <TitleCard
            _hstack={{ bg: code === "hi" && "bgRed.500" }}
            onPress={() => {
              setCode("hi");
              setLangChanged(true);
            }}
            _title={{ bg: code === "hi" ? "white" : "grayTitleCard" }}
            title={
              <FrontEndTypo.H3 color={code === "hi" ? "bgRed.500" : "white"}>
                {t("HIN")}
              </FrontEndTypo.H3>
            }
          >
            <FrontEndTypo.H3 color={code === "hi" ? "white" : null}>
              {t("HINDI")}
            </FrontEndTypo.H3>
          </TitleCard>
          <TitleCard
            _hstack={{ bg: code === "en" && "red.500" }}
            onPress={async () => {
              setCode("en");
              setLangChanged(true);
            }}
            _title={{ bg: code === "en" ? "white" : "grayTitleCard" }}
            title={
              <FrontEndTypo.H3 color={code === "en" ? "red.500" : "white"}>
                {t("En")}
              </FrontEndTypo.H3>
            }
          >
            <FrontEndTypo.H3 color={code === "en" ? "white" : null}>
              {t("ENGLISH")}
            </FrontEndTypo.H3>
          </TitleCard>
        </HStack>
      </Box>
    </VStack>
  );
}
