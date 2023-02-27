import React, { useState } from 'react';
import styles from './App.module.css';
import { Select } from './components/Select';
import { Option } from './interfaces';
import MultipleSelect from "./components/Select/MultipleSelect"

const options: Option[] = [
  {
    label: "Audi",
    value: "audi"
  },
  {
    label: "Ferrari",
    value: "ferrari"
  },
  {
    label: "Mercedes Benz",
    value: "mercedes"
  },
  {
    label: "BMW",
    value: "bmw"
  },
  {
    label: "Tesla",
    value: "tesla"
  },
];

const App: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Option | null>(null);
  return (
    <>
      <div className={styles['app']}>
        <Select
          placeholder='Select a car'
          selected={selectedItem}
          options={options}
          onChange={(selection: Option) => setSelectedItem(selection)}
        />
        <p>Selection {selectedItem?.label}</p>
      </div>
      <br />
      <MultipleSelect />
    </>
  );
};

export default App;