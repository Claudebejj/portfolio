import React from "react";
import { useQuery, gql } from "@apollo/client";
import OutboundLink from "./OutBoundLink";
import { parseHTMLContent, truncate } from "@/utils/helpers";
import Loader from "./Loader";
import Image from "next/image";

const GET_PROJECTS = gql`
  query NewQuery {
    portfolioProject {
      nodes {
        title
        content
        tags {
          edges {
            node {
              name
            }
          }
        }
        featuredImage {
          node {
            altText
            title
            sourceUrl
          }
        }
        portfoliodetails {
          note
          link
        }
      }
    }
  }
`;

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <Loader />;

  if (error) return <div>Error: {error.message}</div>;

  const projects = data?.portfolioProject?.nodes || [];

  return (
    <section className="py-8 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects - Showcasing My Work</h2>
      {projects.map((project, index) => (
        <div key={index} className="flex items-start mb-8 shadow-lg p-4 rounded-lg">
        <div className="w-64 h-64 rounded-lg overflow-hidden mr-4 relative">
            <Image
              src={project.featuredImage?.node?.sourceUrl} // Make sure your images are in the 'public/images/' directory
              alt={project.featuredImage?.node?.altText || project.title}
              layout="fill"
              objectFit="cover"
              className="object-fill"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            {project.content && (
              <p className="text-gray-600 mb-4">
                {truncate(parseHTMLContent(project.content), 100, true)}
              </p>
            )}
            <div className="flex space-x-2 mb-2">
              {project.tags.edges.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="bg-gray-300 py-1 px-2 rounded-lg text-sm"
                >
                  {tag.node.name}
                </span>
              ))}
            </div>
            {project.portfoliodetails && (
              <div>
                {project.portfoliodetails.note && (
                  <p>
                    Note:{" "}
                    <span className="font-medium">
                      {parseHTMLContent(project.portfoliodetails.note)}
                    </span>
                  </p>
                )}
                <OutboundLink href={project.portfoliodetails.link} className="mt-2">
                  Preview
                </OutboundLink>
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
