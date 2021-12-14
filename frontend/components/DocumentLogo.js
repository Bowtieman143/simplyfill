import Image from "next/image";

export default function DocumentLogo() {
  return (
    <div className="d-inline-block document-logo align-top mb-5">
      <Image src="/logo-dark.png" width={180} height={53} />
    </div>
  );
}
