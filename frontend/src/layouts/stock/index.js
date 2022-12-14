import DashboardLayout from "components/DashboardLayout";
import DashboardNavbar from "components/DashboardNavbar";
import MDBox from "components/MDBox";
import profilesListData from "./data/profilesListData";
import ProfilesList from "./components/profilesList";

export default function Stock() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={6}>
        <ProfilesList
          title="Usuarios"
          profiles={profilesListData}
          shadow={false}
        />
      </MDBox>
    </DashboardLayout>
  );
}
