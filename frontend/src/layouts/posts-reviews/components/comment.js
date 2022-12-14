import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  fonts: {
    fontWeight: "bold",
  },
  inline: {
    display: "inline",
  },
}));

const Comment = ({ comments }) => {
  const handleDelete = () => {
    alert("delete");
  };

  const classes = useStyles();
  return (
    <List className={classes.root}>
      {comments.map((comment) => {
        return (
          <React.Fragment key={comment.id}>
            <ListItem key={comment.id} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="avatar" src="/assets/images/bruce-mars.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <MDTypography className={classes.fonts}>
                    {comment.name}
                  </MDTypography>
                }
                secondary={
                  <>
                    <MDTypography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {comment.date}
                    </MDTypography>
                    {` - ${comment.body}`}
                  </>
                }
              />
              <MDButton size="sm" iconOnly="true" onClick={handleDelete}>
                <Icon style={{ color: "#FF0000" }}>delete</Icon>
              </MDButton>
            </ListItem>
            <Divider />
          </React.Fragment>
        );
      })}
    </List>
  );
};

export default Comment;
