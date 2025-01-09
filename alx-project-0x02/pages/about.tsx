import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

export default function About() {
  return (
    <>
      <Header />
      <h1>About</h1>
      <div className="flex gap-4 justify-center  items-center">
        <Button shape="rounded-sm" size="small" />
        <Button shape="rounded-md" size="medium" />
        <Button shape="rounded-full" size="large" />
      </div>
    </>
  );
}
