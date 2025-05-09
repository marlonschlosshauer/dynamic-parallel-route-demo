import Link from "next/link";
import { FC } from "react";

const en = [
  "/global/en/oem/",
  "/global/en/oem/products",
  "/global/en/oem/news",
  "/global/en/oem/contact",
  "/global/en/oem/search",
  "/global/en/oem/productfinder",
];

const de = [
  "/global/de/oem/",
  "/global/de/oem/produkte",
  "/global/de/oem/nachrichten",
  "/global/de/oem/kontakt",
  "/global/de/oem/suche",
  "/global/de/oem/produktfinder",
];

export const Links: FC = () => {
  return (
    <ul className="list-disc">
      {en.map((link, key) => (
        <li key={key}>
          <Link href={link}>{link}</Link>
        </li>
      ))}
      <br />
      {de.map((link, key) => (
        <li key={key}>
          <Link href={link}>{link}</Link>
        </li>
      ))}
    </ul>
  );
};
