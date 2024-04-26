import Sidebar from "@/components/Sidebar";

export default function AboutLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <section className="flex gap-16 p-8">
         <Sidebar />
         {children}
      </section>
   );
}
