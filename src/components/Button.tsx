import { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {}
export default function Button({ children, ...props }: Readonly<ButtonProps>) {
  return (
    <button
      className="rounded-xl px-8 py-5 bg-blue-default text-grey-50"
      {...props}
    >
      {children}
    </button>
  );
}
