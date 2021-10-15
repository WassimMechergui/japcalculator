import React, { ChangeEvent, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { CustomTheme } from "../../style/theme";
import { CSSProperties } from "@material-ui/styles";
import { findByLabelText } from "@testing-library/dom";

import Popup from '../Popup/Popup'

type ClassNames =
  | "container"
  | "nameContainer"
  | "name"
  | "controls"
  | "value"
  | "button"
  | "input"
  | "image";


interface OwnProps {
  classes: Record<ClassNames, string>;
  imgSrc: string;
  name: string;
  value: number;
  calorie : number;
  onChange?: (n: number) => void;
}

type Props = OwnProps;

export const FoodTile: React.FC<Props> = (props: Props) => {
  const { classes, imgSrc, name, value, calorie, onChange } = props;

  const [shown, show] = useState(false)

  const handleChange = (value: number) => () => {
    if (value < 0) {
      value = 0;
    }
    if (onChange) {
      onChange(value);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleChange(Number(event.target.value))();
  };
  const showDetails = () =>{
    show(!shown)
    console.log("show popup")
  }

  console.log(calorie)
  return (
    <div className={classes.container}>
      {shown ? <Popup name = {name} calories = {calorie} /> : null}
      <img src={imgSrc} alt={name} className={classes.image} onClick = {showDetails}/>
      <div className={classes.nameContainer}>
        <span className={classes.name}>{name}</span>

        <div className={classes.controls}>
          <span className={classes.button} onClick={handleChange(value - 1)}>
            -
          </span>
          {/* <span className={classes.value}>{value || 0}</span> */}
          <input
            value={value}
            onChange={handleInputChange}
            type="number"
            className={classes.input}
          />
          <span className={classes.button} onClick={handleChange(value + 1)}>
            +
          </span>
        </div>
      </div>
    </div>
  );
};

const styles = (theme: CustomTheme): Record<ClassNames, CSSProperties> => ({
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: 200
  },
  nameContainer: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing(1),
    width: "100%"
  },
  name: {
    color: "black",
    fontWeight: "bold"
  },
  controls: {
    display: "flex",
    alignItems: "center",
    "& > svg": {
      color: "grey"
    }
  },
  button: {
    color: "grey"
  },
  image: {
    height: 100
  },
  input: {
    border: "none",
    outline: "none",
    mozAppearance: "textfield",
    width: 30,
    textAlign: "center"
  },
  value: {
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5)
  }
});

export default withStyles(styles)(FoodTile);
