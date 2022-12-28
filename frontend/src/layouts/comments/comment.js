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
import axios from "axios";

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
  const handleDelete = async (commentID) => {
    let res = await axios.delete(
      `http://localhost:5000/comentarios/deleteComment/${commentID}`
    );

    alert("Comentario eliminado");
    location.reload(false);
  };

  const parseDate = (date) => {
    let dateArray = date.split("T");
    let dateParsed = dateArray[0];
    return dateParsed;
  };

  const classes = useStyles();
  return (
    <List className={classes.root}>
      {comments.map((comment) => {
        return (
          <React.Fragment key={comment.id}>
            <ListItem key={comment.id} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="avatar" src={comment.fotoDePerfil} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <MDTypography className={classes.fonts}>
                    {comment.nombre}
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
                      {parseDate(comment.fecha)}
                    </MDTypography>
                    {` - ${comment.contenido}`}
                  </>
                }
              />
              <MDButton
                size="sm"
                iconOnly="true"
                onClick={() => handleDelete(comment.comentariosGUID)}
              >
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
