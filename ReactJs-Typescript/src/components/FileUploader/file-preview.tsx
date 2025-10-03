type FilePreviewTypes = {
  file: File;
  removeFileHandler: (fileName: string) => void;
};

export default function FilePreview({
  file,
  removeFileHandler,
}: FilePreviewTypes) {
  const objectURL = URL.createObjectURL(file);
  const fileSize = Number(file.size / 1024).toFixed(2);
  return (
    <div className="flex gap-2 p-5 mt-2 rounded shadow-lg h-30 bg-gray-50">
      <img
        src={objectURL}
        alt={file.name}
        className="object-contain w-10 my-auto"
      />
      <div className="flex flex-col items-start justify-start flex-grow ">
        <span className="font-bold text-black">{file.name}</span>
        <span className="text-gray-400">{fileSize} Kb</span>
      </div>
      <button
        onClick={() => removeFileHandler(file.name)}
        className="text-red-600"
      >
        X
      </button>
    </div>
  );
}
