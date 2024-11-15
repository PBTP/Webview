import { cookies } from 'next/headers';

export default function Home() {
  const cookieStore = cookies();
  const cookieValue = cookieStore.get('AUTH')?.value;
  return <div>{cookieValue}</div>;
}
