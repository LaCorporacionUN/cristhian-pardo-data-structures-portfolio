import { Button, HStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <HStack spacing={2}>
      <Button size="sm" onClick={() => changeLanguage("en")}>
        EN
      </Button>
      <Button size="sm" onClick={() => changeLanguage("es")}>
        ES
      </Button>
    </HStack>
  );
}
