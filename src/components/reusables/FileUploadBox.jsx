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

export default function FileUploadBox(props) {
  const { contentType, info, setFile } = props;

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

  return (
    <div className="uploader">
      <div className="uploader-wrapper" {...getRootProps({ style })}>
        <input {...getInputProps()} />

        {acceptedFiles.length !== 0 ? (
          <div
            className=" mb-3 d-flex flex-column align-items-center"
            key={acceptedFiles[0].path}
          >
            <div className="successimage">
            <img src="/success-croped.gif" alt="icon" />
            </div>
            <h4 className="mb-2">File uploaded successfully.</h4>
            <div className="d-flex">
            <span style={{marginRight: '8px'}}>File Name: </span>
            <span className="text-secondary">{acceptedFiles[0].path}</span>
            </div>
          </div>
        ) : (
          <>
            <img src="/doc-icon.svg" alt="icon" />
            <h4>Drag & drop your {contentType} here.</h4>
            <small className="text-muted mb-3">{info}</small>
            <Button variant="secondary" type="submit">
              Upload
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
