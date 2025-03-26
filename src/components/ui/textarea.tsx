type TextareaProps = {
  placeholder: string;
  className?: string;
};

export const Textarea = ({ placeholder, className }: TextareaProps) => {
  return (
    <textarea
      placeholder={placeholder}
      className={`border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    ></textarea>
  );
};
