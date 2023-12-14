'use client'
import { useCallback, useState } from 'react';
import { useDropzone} from 'react-dropzone';

function DropArea() {
  const onDrop = useCallback((acceptedFiles: Array<File>) => {
    const file = new FileReader;

    file.onload = function() {
      setPreview(file.result);
    }

    file.readAsDataURL(acceptedFiles[0])
  }, [])

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop
  });

  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

  async function handleOnSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    if ( typeof acceptedFiles[0] === 'undefined' ) return;
    return 'success'
  }

  return (
    <>
        <form className="max-w-md border border-gray-200 rounded p-6 mx-auto h-full" onSubmit={handleOnSubmit}>

            <div {...getRootProps()} className='h-full'>
              <input {...getInputProps()} />
              {
                isDragActive ?
                  <p>Drop the files here ...</p> :
                  <p>Drag in drop some files here, or click to select files</p>
              }
          {preview && (
            <p className="mb-5">
              <img src={preview as string} alt="Upload preview" />
            </p>
          )}
            </div>


          <button>Submit</button>
        </form>
    </>
  )
}

export default DropArea;