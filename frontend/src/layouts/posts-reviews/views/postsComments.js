import React from "react";
import DashboardLayout from "components/DashboardLayout";
import DashboardNavbar from "components/DashboardNavbar";
import MDBox from "components/MDBox";
import Comments from "../../comments/commentFeed";

const CommentExampleComment = () => (
  <DashboardLayout>
    <DashboardNavbar />
    <MDBox mt={6}>
      <Comments />
    </MDBox>
  </DashboardLayout>
);

export default CommentExampleComment;
