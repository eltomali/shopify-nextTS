import cn from "classnames";
import { FunctionComponent, ReactNode } from "react";
import styles from "./Grid.module.css";

interface Props {
  children: ReactNode[];
  layout?: "A" | "B";
}

const Grid: FunctionComponent<Props> = ({ children, layout = "A" }) => {
  const rootClassName = cn(styles.root, {
    [styles.layoutA]: layout === "A",
    [styles.layoutB]: layout === "B",
  });
  return <div className={rootClassName}>{children}</div>;
};

export default Grid;
