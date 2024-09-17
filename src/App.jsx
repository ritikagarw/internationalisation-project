import LanguageSelector from "./components/language-selector";
import { Trans, useTranslation } from "react-i18next";
import "./App.css";

const App = () => {
  const { t } = useTranslation();
  const { line1, line2 } = t("description", { name: "Ritik" });

  return (
    <div className="container">
      <div className="languageSelectorBox">
        <LanguageSelector />
      </div>
      <h1>{t("greeting")}</h1>
      <div className="content">
        <div className="desc">
          <span>
            <Trans
              // i18nKey={"description.line1"}
              i18nKey={line1}
              values={{
                name: "Ritik",
              }}
              components={{ 1: <b /> }}
            ></Trans>
          </span>
          <span>{line2}</span>
        </div>

        <div className="worldImg">
          <img src="/connectedWorld.svg" alt="Connected World" />
        </div>
      </div>
      {/* <span>{t("greeting.key", "can't load")}</span> */}
    </div>
  );
};

export default App;
