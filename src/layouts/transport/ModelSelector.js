import React, { useCallback, useContext, useEffect } from "react";
import { Select, SelectItem } from "@ui-kitten/components";
import { ConfigurationContext } from "core/contexts";
import SelectorSection from "./SelectorSection";

const ModelSelector = ({ name, placeholder, onSelect }) => {
  const [data, setData] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  const { apiInstance } = useContext(ConfigurationContext);

  useEffect(() => {
    apiInstance.get(`/api/${name}`).then((response) => {
      if (response.status === 200) {
        setData(response.data);
      }
    });
  }, []);

  const displayValue = selectedIndex
    ? data[selectedIndex.row].name
    : placeholder;

  return (
    <SelectorSection loading={!data}>
      <Select
        selectedIndex={selectedIndex}
        onSelect={(index) => {
          setSelectedIndex(index);
          onSelect(data[index.row]);
        }}
        value={displayValue}
      >
        {data?.map((instance) => (
          <SelectItem key={instance.id} title={instance.name} />
        ))}
      </Select>
    </SelectorSection>
  );
};

export default ModelSelector;
