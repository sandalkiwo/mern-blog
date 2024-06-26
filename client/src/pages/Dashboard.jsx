import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSIdebar from "../components/DashSIdebar";
import DashProfile from "../components/DashProfile";
import DashPosts from "../components/DashPosts";
import DashUsers from "../components/DashUsers";
import DashComments from "../components/DashComments";
import DashboardsComponents from "../components/DashboardsComponents";

const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if(tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <div className="md:w-56">
        {/* sidebar */}
        <DashSIdebar />
      </div>
      {/* profile */}
      {tab === "profile" && <DashProfile /> }
      {/* posts */}
      {tab === "posts" && <DashPosts />}
      {/* users */}
      {tab === "users" && <DashUsers/>}
      {/* comments */}
      {tab == "comments" && <DashComments/>}
      {/* dashboard */}
      {tab == "dash" && <DashboardsComponents />}
    </div> 
  )
};

export default Dashboard;
