import { type ButtonProps } from "@/interfaces";
export default function Button({ size, shape }: ButtonProps) {
  let buttonSize: string;

  switch (size) {
    case "large":
      buttonSize = "px-6 py-3 text-lg";
      break;
    case "medium":
      buttonSize = "px-4 py-2 text-base";
      break;
    case "small":
      buttonSize = "px-3 py-1 text-sm";
      break;
    default:
      buttonSize = "px-4 py-2 text-base"; // default to medium if no size is provided
      break;
  }

  const buttonStyle = `${buttonSize} ${shape} bg-blue-500 hover:bg-blue-700 text-white`;
  return <button className={buttonStyle}>Click me</button>;
}
