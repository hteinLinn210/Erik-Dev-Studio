import { BtnLink } from "./BtnLink";

interface ProjectInfoProps {
  number: string;
  title: string;
  type: string;
  description: string;
}

export const ProjectInfo = ({
  number,
  title,
  type,
  description,
}: ProjectInfoProps) => {
  return (
    <div className="text-block flex gap-4">
      <h3 className="heading-3 text-xl sm:text-2xl md:text-4xl lg:text-6xl">
        [{number}]
      </h3>

      <div className="flex flex-col items-start gap-4">
        <h3 className="heading-3 lg:text-6xl">{title}</h3>
        <p className="heading-3 text-primary/40 sm:text-xl md:text-2xl lg:text-3xl">
          {type}
        </p>
        <p className="text-primary/70">{description}</p>
        <BtnLink href="#">Take a Look</BtnLink>
      </div>
    </div>
  );
};
