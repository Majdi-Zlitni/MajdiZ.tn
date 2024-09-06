import React from "react";
import {
  BentoGrid,
  BentoGridItem,
} from "./ui/BentoGrid";
import { MdDescription } from "react-icons/md";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(
          ({
            title,
            description,
            className,
            id,
            img,
            imgClassName,
            titleClassName,
            spareImg,
          }) => (
            <BentoGridItem
              key={id}
              title={title}
              description={description}
              className={className}
              id={id}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
