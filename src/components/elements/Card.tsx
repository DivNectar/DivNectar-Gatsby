import React from "react"
import ContentCardStyles from "../../styles/content-card.styles"
import { GatsbyImage, IGatsbyImageData, getImage, ImageDataLike} from "gatsby-plugin-image";
import FeaturedImage from "./FeaturedImage";

interface CardProps {
  title: string,
  image: IGatsbyImageData,
  slug: string,
  key: any,
  tags?: string[]
}

const Card: React.FC<CardProps> = ({title, image, slug, tags}) => {

  return (
    <>
      <ContentCardStyles.PostCard>
              <ContentCardStyles.TagsContainer>
                {tags ? tags.map((tag: string) => {
                  return (
                    <ContentCardStyles.TagChip
                      to={`/tags/${tag}`}
                    >
                      {tag}
                    </ContentCardStyles.TagChip>
                  )
                }) : (<></>) } 
              </ContentCardStyles.TagsContainer>
              <ContentCardStyles.PostHeader>
                <ContentCardStyles.PostLink
                  to={slug}
                >
                  {title}
                </ContentCardStyles.PostLink>
                <div>
                  { image ? <FeaturedImage alt="featuredImage" image={getImage(image)!} /> : null }
                </div>
              </ContentCardStyles.PostHeader>
            </ContentCardStyles.PostCard>
    </>
  )
}

export default Card