import React, { useCallback, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import { allowedFileFormats } from "../../configs/config";
import { Button } from "react-bootstrap";

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

function dropBox() {
  const [file, setFile] = useState(null);

  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    acceptedFiles,
  } = useDropzone({
    accept: allowedFileFormats,
    maxFiles: 1,
    // noClick: true,
    noKeyboard: true,
    onDrop: useCallback((file) => setFile(file[0]), []),
  });

  const style = useMemo(
    () => ({
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  return {
    getRootProps,
    getInputProps,
    style,
    file,
    acceptedFiles,
  };
}

export default function FileUploadBox(props) {
  const { getRootProps, getInputProps, style, acceptedFiles } = dropBox();
  const { contentType, info } = props;

  return (
    <div className="uploader">
      <div className="uploader-wrapper" {...getRootProps({ style })}>
        <img src="/doc-icon.svg" alt="icon" />
        <input {...getInputProps()} />

        {acceptedFiles.length !== 0 ? (
          <li key={acceptedFiles[0].path}> {acceptedFiles[0].path}</li>
        ) : (
          <>
            <h3>Drag & drop your {contentType} here.</h3>
            <small className="text-muted mb-3">{info}</small>
          </>
        )}

        <Button variant="secondary" type="submit">
          Upload
        </Button>
      </div>
    </div>
  );
}
