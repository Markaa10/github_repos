import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserRepos } from "./action";

export function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserRepos("markaa10"));
  }, [dispatch]);

  const state = useSelector((state) => state) as any;

  const userRepos = state.repos;
  console.log(state.repos.data);

  return (
    <div>
      <h1>Home</h1>

      {userRepos.loading && <h1>Loading...</h1>}
      {userRepos.data.map((item: any, index: number) => (
        <p key={index}>{item.name}</p>
      ))}
    </div>
  );
}
