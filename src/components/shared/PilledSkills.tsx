interface PilledSkillsProps {
  skill: string;
}

export const PilledSkills = ({ skill }: PilledSkillsProps) => {
  return (
    <div className="border-secondary text-secondary p flex max-w-max items-center gap-2 rounded-full border bg-transparent px-6 py-2">
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.25 9.00003L15.42 6.91503L15.675 4.15503L12.9675 3.54003L11.55 1.15503L9 2.25003L6.45 1.15503L5.0325 3.54003L2.325 4.14753L2.58 6.90753L0.75 9.00003L2.58 11.085L2.325 13.8525L5.0325 14.4675L6.45 16.8525L9 15.75L11.55 16.845L12.9675 14.46L15.675 13.845L15.42 11.085L17.25 9.00003ZM7.5 12.75L4.5 9.75003L5.5575 8.69253L7.5 10.6275L12.4425 5.68503L13.5 6.75003L7.5 12.75Z"
          fill="#F7F7F5"
        />
      </svg>
      <p>{skill}</p>
    </div>
  );
};
