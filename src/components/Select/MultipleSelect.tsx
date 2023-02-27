import CreatableSelect from "react-select/creatable";

const MultipleSelect = () => {
    const options = [
        { value: "jack", label: "Jack", color: "#FF8B00" },
        { value: "john", label: "John", color: "#36B37E" },
        { value: "mike", label: "Mike", color: "#0052CC" },
    ];
    const colorStyles = {
        control: (styles: any) => ({ ...styles, backgroundColor: "white" }),
        option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
            return { ...styles, color: data.color };
        },
        multiValue: (styles: any, { data }: any) => {
            return {
                ...styles,
                backgroundColor: data.color,
                color: "#fff",
            };
        },
        multiValueLabel: (styles: any, { data }: any) => {
            return {
                ...styles,
                color: "#fff",
            };
        },
        multiValueRemove: (styles: any, { data }: any) => {
            return {
                ...styles,
                color: "#fff",
                cursor: "pointer",
                ":hover": {
                    color: "#fff",
                },
            };
        },
    };
    const handleChange = (selectedOption: any, actionMeta: any) => {
        console.log("handleChange", selectedOption, actionMeta);
    };
    const handleInputChange = (inputValue: any, actionMeta: any) => {
        console.log("handleInputChange", inputValue, actionMeta);
    };
    return (
        <CreatableSelect
            options={options}
            onChange={handleChange}
            onInputChange={handleInputChange}
            isMulti
            styles={colorStyles}
        />
    );
};

export default MultipleSelect;