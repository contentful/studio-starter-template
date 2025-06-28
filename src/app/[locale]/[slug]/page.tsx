import { MODE } from '@/lib/constants';
import Studio from '@/app/_studio/studio';

export default async function Home({
  params,
  searchParams,
}: {
  params: { locale: string; slug: string };
  searchParams: { mode: MODE; spaceId?: string; environmentId?: string; deliveryToken?: string; previewToken?: string };
}) {
  const { mode, spaceId, environmentId, deliveryToken, previewToken } = searchParams;
  const { locale, slug } = params;

  return (
    <Studio
      slug={slug}
      locale={locale}
      mode={mode}
      spaceId={spaceId}
      environmentId={environmentId}
      deliveryToken={deliveryToken}
      previewToken={previewToken}
    />
  );
}
