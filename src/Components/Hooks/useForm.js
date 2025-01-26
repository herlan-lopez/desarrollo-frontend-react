import { useState } from "react";
const useForm = (initialState = {}) => {
    const [formData, setFormData] = useState(initialState);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const resetForm = (newData = initialState) => {
        setFormData(newData);
    };
    
    return {
        formData,
        handleChange,
        resetForm,
    };
};
export default useForm;