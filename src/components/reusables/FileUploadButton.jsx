import { useDropzone } from "react-dropzone";
import { Button } from "react-bootstrap";
import { allowedFileFormats } from "./constants";
import { useCallback } from "react";

export default function FileUploadButton(props) {
  const { setFile, setAcceptedFile } = props;

  const { getRootProps, acceptedFiles } = useDropzone({
    noDragEventsBubbling: true,
    accept: allowedFileFormats,
    maxFiles: 1,
    onDrop: useCallback((file) => setFile(file[0]), []),
  });

  acceptedFiles.map((file) => setAcceptedFile(file));

  return (
    <div {...getRootProps({ className: "dropzone" })}>
      <Button variant="secondary" type="submit">
        Upload
      </Button>
    </div>
  );
}
