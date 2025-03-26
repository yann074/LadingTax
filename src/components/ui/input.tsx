
type InputProps = {
  placeholder: string;
  className?: string;
};

export const Input = ({ placeholder, className }: InputProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    />
  );
};
