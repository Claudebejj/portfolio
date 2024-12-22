import React from "react";
import { useQuery, gql } from "@apollo/client";
import Image from "next/image";
import HalfMoonImage from "./HalfMoonImage";
import Loader from "./Loader";
import Link from "next/link";
import DownloadPDFButton from "./DownloadPDF";
import OutboundLink from "./OutBoundLink";
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
  ).replace(
    /http:\/\/PROJECTS_PAGE_URL/g,
    "/projects"
  );
  return (
    <section className="py-16 px-8">
      <h1 className="text-4xl font-semibold mb-8 text-center">{page.title}</h1>
      <div className="flex justify-between">
        <div className="relative h-56 w-56 text-center">
          <HalfMoonImage
            src={page?.featuredImage?.node?.sourceUrl}
            alt={page?.featuredImage?.node?.altText}
          />
          <h2 className="mt-4">Claude Bejjani</h2>
          <p>Web Developer</p>
            <DownloadPDFButton fileURL={'/ClaudeBejjaniCV-2023.pdf'} fileSize={97} />
            <OutboundLink className="w-full" href="https://www.linkedin.com/in/claude-bejjani-web-developer/">
              <div className="flex justify-center items-center mt-4">
              <Image width={32} height={32} src="/LinkedIn_icon.svg.png" alt="linkedIn logo" objectFit="cover" />
              <span className="ml-2">My LinkedIn Profile</span>
              </div>

            </OutboundLink>


        </div>
        <div className="w-9/12 ml-8 pageContent ">
          <div className="text-lg" dangerouslySetInnerHTML={{ __html: modifiedContent }} />
        </div>
      </div>
    </section>
  );
};
export default About;
