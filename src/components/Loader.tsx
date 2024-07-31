import { ComponentPropsWithoutRef } from "react";
import { LoaderIcon } from "../assets";

interface LoaderProps extends ComponentPropsWithoutRef<"div"> {}
export default function Loader({ ...props }: Readonly<LoaderProps>) {
  return (
    <div {...props} className={`animate-spin-slow ${props.className}`}>
      <img
        src={LoaderIcon}
        alt="github search - loader"
        width={40}
        className="w-10 h-10 text-grey-400"
        height={40}
      />
    </div>
  );
}
