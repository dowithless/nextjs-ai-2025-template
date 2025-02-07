import { type BasicTemplateProps } from "./interface";

/** The basic component template */
export const BasicTemplate: React.FC<BasicTemplateProps> = ({
  label,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-block rounded-3xl border-none bg-blue-500 px-5 py-3 text-sm font-bold leading-4 text-white"
    >
      {label}
    </button>
  );
};
