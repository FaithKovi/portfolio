import React from "react";
import type { Props } from "@theme/BlogPostItems";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function BlogPostItems({ items }: Props): React.JSX.Element {
  return (
    <div className="writing-card-grid blog-post-grid">
      {items.map(({ content: BlogPostContent }) => {
        const { metadata, frontMatter } = BlogPostContent;
        const image = (frontMatter as { image?: string }).image;
        return (
          <a
            className="writing-card"
            href={metadata.permalink}
            key={metadata.permalink}
          >
            <div
              className={`writing-card-media${image ? "" : " writing-card-media--tile"}`}
            >
              {image ? (
                <img src={image} alt="" loading="lazy" />
              ) : (
                <span className="writing-tile-platform">
                  {metadata.readingTime
                    ? `${Math.ceil(metadata.readingTime)} min read`
                    : "Blog"}
                </span>
              )}
              <span className="writing-card-date">
                {formatDate(metadata.date)}
              </span>
            </div>
            <h3>{metadata.title}</h3>
            <p>{metadata.description}</p>
          </a>
        );
      })}
    </div>
  );
}
