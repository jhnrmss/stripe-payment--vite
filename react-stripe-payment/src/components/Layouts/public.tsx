import { Outlet } from "react-router";
import Header from "./header";

const PublicLayout = () => {
  return (
    <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default PublicLayout;
