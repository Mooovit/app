import React from "react";
import { Card } from "@ui-kitten/components";
import { LoadingIndicator } from "components/ui";

const SelectorSection = ({ children, loading }) => {
  return <Card>{loading ? <LoadingIndicator /> : children}</Card>;
};

export default SelectorSection;
