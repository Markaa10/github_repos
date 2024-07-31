export type Organization = {
  id: string;
  login: string;
  description: string;
  avatar_url: string;
};
interface OrgCardProps {
  org: Organization;
}

export default function OrgCard({ org }: Readonly<OrgCardProps>) {
  return (
    <div className="p-4 flex items-end gap-12 w-full rounded-lg bg-grey-100 max-w-[18.75rem] max-h-40 h-full">
      <img
        src={org.avatar_url}
        width={200}
        height={200}
        className="w-16 h-16 rounded-full"
        alt={org.login}
      />

      <span className="flex flex-col gap-[0.38rem]">
        <strong className="text-grey-800 text-base leading-4 font-bold">
          {org.login}
        </strong>
        <strong className="text-grey-600 text-sm font-normal">
          {org.description}
        </strong>
      </span>
    </div>
  );
}
