interface ServiceCardProps {
  title: string;
  description: string;
}

export const ServiceCard = ({ title, description }: ServiceCardProps) => {
  return (
    <div className="bg-secondary text-primary flex h-[15rem] flex-col justify-between rounded-lg p-4 md:h-[20rem] md:p-8">
      <h3 className="heading-3 sm:text-xl md:text-2xl lg:text-3xl">{title}</h3>
      <p className="text-sm md:text-base">{description}</p>
    </div>
  );
};
