import { ChangeEvent, PropsWithChildren, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { GithubIcon } from "../assets";
import Button from "./Button";
import SearchInput from "./SearchInput";

interface HomePageLayoutProps extends PropsWithChildren {}
export default function HomePageLayout({
  children,
}: Readonly<HomePageLayoutProps>) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [username, setUsername] = useState(searchParams.get("username") ?? "");

  const handleSearchOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUsername(value);
  };

  const handleSearch = () => {
    setSearchParams({ username });
  };

  return (
    <div className="flex items-center flex-col justify-center">
      <header className="flex items-center gap-3 mt-16 mb-11">
        <img
          src={GithubIcon}
          alt="github search"
          width={48}
          className="w-12 h-12 text-grey-900"
          height={48}
        />
        <strong className="text-grey-900 text-[2.5rem] font-bold leading-10">
          Github Finder
        </strong>
      </header>

      <div className="flex items-center gap-4 w-full justify-center">
        <SearchInput
          inputProps={{
            value: username,
            onChange: handleSearchOnChange,
          }}
        />

        <Button onClick={handleSearch}>Search</Button>
      </div>

      <hr className="text-grey-300 w-full max-w-[90rem] mt-10 mb-8" />
      {children}
    </div>
  );
}
