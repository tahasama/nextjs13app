import Side from "../../Side";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Side />
      {children}
    </section>
  );
}
