import { useAtom } from "jotai";

import { saveDataAtom } from "../util/atoms";
import { sampleData } from "../sample-data";

export default function Footer() {
  const [, setSaveData] = useAtom(saveDataAtom);

  const demoHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setSaveData(sampleData);
  };

  return (
    <footer className="footer">
      <p className="read-the-docs">
        Don't have a save file, but want to demo the app? Click{" "}
        <a href="#" onClick={demoHandler}>
          here
        </a>{" "}
        to test a sample save file.
      </p>
      <p className="read-the-docs">
        Find the Github repo{" "}
        <a href="https://github.com/gendelbendel/fapi-tools"> here.</a>
      </p>
    </footer>
  );
}
