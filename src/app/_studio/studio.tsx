'use client';

import { MODE } from '@/lib/constants';
import {
  ExperienceRoot,
  useFetchBySlug,
} from '@contentful/experiences-sdk-react';
import '@lib/register-components';
import { ContentfulClientApi, createClient } from 'contentful';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

type StudioProps = {
  slug: string;
  locale?: string;
  mode: MODE;
  // Optional Contentful credentials from query params
  spaceId?: string;
  environmentId?: string;
  deliveryToken?: string;
  previewToken?: string;
};

const Studio = (props: StudioProps) => {
  const { slug, locale = 'en-US', mode, spaceId, environmentId, deliveryToken, previewToken } = props;

  // Use query param values if provided, else fallback to env vars
  const config = {
    space: spaceId || process.env.NEXT_PUBLIC_SPACE_ID!,
    environment: environmentId || process.env.NEXT_PUBLIC_ENVIRONMENT_ID || 'master',
    accessToken: deliveryToken || process.env.NEXT_PUBLIC_ACCESS_TOKEN!,
    host: 'cdn.contentful.com',
  };

  if (mode === 'preview') {
    config.accessToken = previewToken || process.env.NEXT_PUBLIC_PREVIEW_TOKEN!;
    config.host = 'preview.contentful.com';
  }

  const client = createClient(config);

  const { experience, isLoading, error } = useFetchBySlug({
    client,
    slug,
    localeCode: locale,
    experienceTypeId: process.env.NEXT_PUBLIC_STUDIO_TYPE_ID || 'landingPage',
  });

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <Suspense fallback={<>ERROR!</>}>
      <ExperienceRoot locale={locale} experience={experience} />
    </Suspense>
  );
};

export default Studio;
