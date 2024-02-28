import { MODE } from '@/lib/constants';
import Studio from '@/app/_studio/studio';

export default async function Home({
  params,
  searchParams,
}: {
  params: { locale: string; slug: string };
  searchParams: { mode: MODE };
}) {
  const { mode } = searchParams;
  const { locale, slug } = params;

  return <Studio slug={slug} locale={locale} mode={mode} />;
}
