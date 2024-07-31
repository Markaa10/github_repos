import { ComponentPropsWithoutRef } from "react";
import { Empty } from "../assets";

interface EmptyDataProps extends ComponentPropsWithoutRef<"div"> {}
export default function EmptyData({ ...props }: Readonly<EmptyDataProps>) {
  return (
    <div
      {...props}
      className={`flex mt-[11.5rem] gap-6 flex-col items-center ${props.className}`}
    >
      <img
        src={Empty}
        alt="github search - empty"
        width={80}
        className="w-20 h-20 grayscale"
        height={80}
      />
      <span className="flex gap-3 flex-col items-center">
        <strong className="text-2xl text-center leading-6 font-bold text-grey-900">
          No Results Yet
        </strong>
        <p className="text-grey-600 text-center text-lg font-normal max-w-[15.375rem]">
          Search for a user to see the results here!
        </p>
      </span>
    </div>
  );
}
