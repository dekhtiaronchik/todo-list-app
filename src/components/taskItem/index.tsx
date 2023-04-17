import React, { useState } from "react";

export function TaskItem () {
    const [checked, setChecked] = useState(true)

    const handleChange = () => {
        setChecked(!checked)
    }

    return <>
    <div>
        <label>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        here will be task name
        </label>
        </div>
    </>
}