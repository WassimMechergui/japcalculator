import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { CustomTheme } from "../../style/theme";
import { CSSProperties } from "@material-ui/styles";
import { findByLabelText } from "@testing-library/dom";

type ClassNames =
  | "container"
  | "name"
  | "calories";

interface OwnProps {
    classes: Record<ClassNames, string>;
    name: string;
    calories : number;
  }

type Props = OwnProps;

const Popup:  React.FC<Props> = (props: Props) => {
    const { classes, name, calories } = props;

    return (
        <div className={classes.container}>
            <div className = {classes.name}> {name}</div>
            <div className = {classes.calories}> {calories} Kcals</div>
        </div>
    );
};

const styles = (theme: CustomTheme): Record<ClassNames, CSSProperties> => ({
    container: {
      position : "absolute",
      alignItems: "center",
      top : '45%',
      display: "flex",
      background : "white",
      boxShadow : "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      flexDirection : "column",
      left : "40%",
      right : "40%",
      textAlign : 'center',
    },
    name : {
        marginTop : "10px",
        margin : "15px",  
        flex : 1
    },
    calories : {
        margin : "10px",
        flex : 1
    }
});
export default withStyles(styles)(Popup);