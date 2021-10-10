import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    console.log(window.innerHeight);
  });
  return <div>Header</div>;
}
