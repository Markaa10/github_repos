import { useQuery } from "@tanstack/react-query";
import { EmptyData, Loader, RepoCard } from "../../components";
import { Repository } from "../../components/RepoCard";

export default function RepositoriesPage() {
  const { isLoading, data } = useQuery({ queryKey: ["repos"] });

  return isLoading ? (
    <Loader className="mt-64" />
  ) : (data as Repository[])?.length > 0 ? (
    (data as Repository[])?.map((repo) => (
      <RepoCard key={repo.id} repo={repo} />
    ))
  ) : (
    <EmptyData className="mt-0 col-span-full" />
  );
}
