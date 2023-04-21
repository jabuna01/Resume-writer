import {useDropzone} from 'react-dropzone';

function OuterDropzone(props) {
  const {getRootProps} = useDropzone({
    // Note how this callback is never invoked if drop occurs on the inner dropzone
    onDrop: files => console.log(files)
  });

  return (
    <div className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <InnerDropzone />
        <p>Outer dropzone</p>
      </div>
    </div>
  );
}

function InnerDropzone(props) {
  const {getRootProps} = useDropzone({noDragEventsBubbling: true});
  return (
    <div {...getRootProps({className: 'dropzone'})}>
      <p>Inner dropzone</p>
    </div>
  );
}