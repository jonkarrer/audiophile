import Link from "next/link";

export const ArrowBtn = ({
  action,
  link,
}: {
  action: string;
  link: string;
}) => {
  return (
    <div className="flex items-center w-14 justify-between text-gray-500 hover:text-D87D4A">
      <div
        style={{
          fontSize: "13px",
          letterSpacing: "1px",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        <Link href={link}>{action}</Link>
      </div>
      <img src="/shared/desktop/icon-arrow-right.svg" alt="arrow icon" />
    </div>
  );
};
export default ArrowBtn;
