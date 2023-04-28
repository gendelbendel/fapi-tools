import pako from "pako";

export default function SaveConverter() {
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.onload = (event) => {
      if (!event.target) return;
      const compressedData = new Uint8Array(event.target.result as ArrayBuffer);
      const decompressedData = pako.inflate(compressedData);
      const textDecoder = new TextDecoder("utf-8");
      const decodedString = textDecoder.decode(decompressedData);

      const startPosition = decodedString.indexOf("{");
      const endPosition = decodedString.lastIndexOf("}") + 1;
      const jsonString = decodedString.slice(startPosition, endPosition);

      try {
        const parsedJson = JSON.parse(jsonString);
        downloadFile({
          data: JSON.stringify(parsedJson, null, 2),
          fileName: "fapi-save-json.json",
          fileType: "text/json",
        });
      } catch (error) {
        console.error("Invalid JSON:", error);
      }
    };

    fileReader.readAsArrayBuffer(file);
  };

  const downloadFile = ({
    data,
    fileName,
    fileType,
  }: {
    data: string;
    fileName: string;
    fileType: string;
  }) => {
    // Create a blob with the data we want to download as a file
    const blob = new Blob([data], { type: fileType });
    // Create an anchor element and dispatch a click event on it
    // to trigger a download
    const a = document.createElement("a");
    a.download = fileName;
    a.href = window.URL.createObjectURL(blob);
    const clickEvt = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    a.dispatchEvent(clickEvt);
    a.remove();
  };

  return <input type="file" onChange={handleFileUpload} accept=".txt" />;
}
