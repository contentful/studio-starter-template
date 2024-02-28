import { MODE } from '@/lib/constants';
import Studio from '@studio/studio';

export default async function Home({
  params,
  searchParams,
}: {
  params: { locale: string };
  searchParams: { mode: MODE };
}) {
  const { mode } = searchParams;
  const { locale } = params;

  return <Studio slug="/" locale={locale} mode={mode} />;
}
