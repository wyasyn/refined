import { Metadata } from "next";

type Params = Promise<{ slug: string }>;

export async function generateMetadata(props: {
  params: Params;
}): Promise<Metadata> {
  const params = await props.params;

  const slug = params.slug;
  return {
    title: slug,
  };
}

export default async function SinglePortfolioPage(props: { params: Params }) {
  const params = await props.params;

  const slug = params.slug;
  return <>{slug}</>;
}
