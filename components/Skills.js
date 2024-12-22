import React from "react";
import { useQuery, gql } from "@apollo/client";
import Image from "next/image";
import HalfMoonImage from "./HalfMoonImage";
import Loader from "./Loader";
const GET_POST_BY_ID = gql`
  query GetPostById($id: ID!) {
    page(id: $id, idType: DATABASE_ID) {
      id
      title
      content
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`;
const About = () => {
  const { loading, error, data } = useQuery(GET_POST_BY_ID, {
    variables: { id: "375" }, // Replace "375" with the actual post ID
  });
  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;
  const { page } = data;
  const modifiedContent = page.content.replace(
    /http:\/\/MY_SKILLS_PAGE_LINK/g,
    "/skills"
  );
  return (
    <section className="py-16 px-8">
      <h1 className="text-4xl font-semibold mb-8 text-center">{page.title}</h1>
      <div className="flex justify-between">
        <div className="relative h-56 rounded-[50%] w-56">
          <HalfMoonImage
            src={page?.featuredImage?.node?.sourceUrl}
            alt={page?.featuredImage?.node?.altText}
          />
        </div>
        <div className="w-9/12 ml-8">
          <div className="text-lg" dangerouslySetInnerHTML={{ __html: modifiedContent }} />
        </div>
      </div>
    </section>
  );
};
export default About;
