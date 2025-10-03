import React, { useState } from "react";
import FilePreview from "./file-preview";

export default function FileUploader() {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragInProcess, setIsDragInProcess] = useState(false);
  const fileUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFileHandler = (fileName: string) => {
    const updatedFiles = files.filter((file) => file.name !== fileName);
    setFiles(updatedFiles);
  };

  const dragEnterHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    !isDragInProcess && setIsDragInProcess(true);
  };

  const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    isDragInProcess && setIsDragInProcess(false);
  };
  const dragDropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const draggedFiles = e.dataTransfer.files;
    setFiles((prev) => [...prev, ...draggedFiles]);
    isDragInProcess && setIsDragInProcess(false);
  };

  return (
    <div className="p-8 m-5 shadow-md">
      <div className="text-center">
        <h1 className="font-bold text-blue-400">React File Uploader</h1>
        <div
          className={`p-5 mt-5 border-2 border-dashed  ${isDragInProcess ? "border-green-500" : "border-gray-500"}`}
          onDragEnter={dragEnterHandler}
          onDragLeave={dragLeaveHandler}
          onDragOver={dragEnterHandler}
          onDrop={dragDropHandler}
        >
          <p className="mb-4 text-gray-400">Drag and Drop file here or</p>
          <input
            type="file"
            id="file-upload"
            multiple
            className="invisible max-w-0"
            onChange={fileUploadHandler}
          />
          <label
            htmlFor="file-upload"
            className="p-2 font-bold text-white bg-green-500 rounded-lg cursor-pointer"
          >
            Browse Files
          </label>
        </div>

        {files.map((file) => {
          return (
            <FilePreview
              file={file}
              key={file.name}
              removeFileHandler={removeFileHandler}
            />
          );
        })}
      </div>
    </div>
  );
}
