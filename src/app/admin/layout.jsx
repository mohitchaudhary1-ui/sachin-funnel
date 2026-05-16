import AdminSidebar from "@/components/AdminSidebar";

export default function AdminLayout({
  children,
}) {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      {/* SIDEBAR */}
      <AdminSidebar />

      {/* PAGE CONTENT */}
      <main
        className="
          min-h-screen
          transition-all
          duration-300

          lg:ml-72
        "
      >
        <div
          className="
            w-full

            px-4
            py-6
            pt-24

            sm:px-6
            sm:py-8
            sm:pt-24

            lg:px-8
            lg:py-8
            lg:pt-8
          "
        >
          {children}
        </div>
      </main>
    </div>
  );
}