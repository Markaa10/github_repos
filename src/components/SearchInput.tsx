import { ComponentPropsWithoutRef } from "react";
import { SearchIcon } from "../assets";

interface SearchInputProps extends ComponentPropsWithoutRef<"fieldset"> {
  inputProps?: ComponentPropsWithoutRef<"input">;
}
export default function SearchInput({
  inputProps,
}: Readonly<SearchInputProps>) {
  return (
    <fieldset className="border p-[1.12rem] w-full max-w-[35rem] flex gap-3 items-center bg-gray-50 rounded-xl border-gray-400">
      <img
        src={SearchIcon}
        alt="github search - search"
        width={24}
        className="w-6 h-6 text-grey-600"
        height={24}
      />
      <input
        type="search"
        placeholder="Enter Github Username"
        name="search"
        id="search"
        className="bg-white border-none w-full outline-none"
        {...inputProps}
      />
    </fieldset>
  );
}
