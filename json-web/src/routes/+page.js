export const load = async () => {
  const data = await fetch(`api:1337/posts`).then((res) => res.json());
  return {data};
};
