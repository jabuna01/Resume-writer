import React, { useCallback, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from 'react-bootstrap';

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

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      accept: {
        "application/pdf": [],
        "application/msword": [],
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
          [],
      },
      maxFiles: 1,
      noClick: true,
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

  const uploadFile = () => {
    if (file) console.log(file);
  };

  return {
    getRootProps,
    getInputProps,
    style,
    uploadFile,
  };
}

export default function FileUploadBox(props) {
  const { getRootProps, getInputProps, style, uploadFile } = dropBox();

  return (
    <div className="uploader">
      <div className="uploader-wrapper" {...getRootProps({ style })}>
        <img src="/doc-icon.svg" alt="icon" />
        <input {...getInputProps()} />
        <h3>Drag & drop your documents here.</h3>
        <small className="text-muted mb-3">
          Documents could be in pdf or docs format
        </small>
        <Button variant="secondary" type="submit" onClick={uploadFile}>
          Upload
        </Button>
      </div>
    </div>
    // <div className="container">
    //   <div {...getRootProps({ style })}>
    //     <input {...getInputProps()} />
    //     <p>Drag 'n' drop some files here, or click to select files</p>
    //   </div>

    //   <button onClick={uploadFile}>Upload</button>
    // </div>
  );
}
