import React, { useState } from "react";

function SalesPersonForm() {
    // field-------------------------------------------------
    const [salesName, setSalesName] = useState('');
    const handleSalesNameChange = (event) => {
        const value = event.target.value;
        setSalesName(value);
    }

    const [employeeId, setemployeeId] = useState('');
    const handleEmployeeIdChange = (event) => {
        const value = event.target.value;
        setemployeeId(value);
    }

    // submit------------------------------------------------
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        console.log(data)

        data.salesName = salesName;
        data.employeeId = employeeId;

        const salePersonUrl = 'http://localhost:8090/api/salesperson/';
        const fetchConfig = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        };

        const response = await fetch(salePersonUrl, fetchConfig);

        if (response.ok) {
            setSalesName('');
            setemployeeId('');
        }
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a New Salesperson</h1>
                    <form
                        onSubmit={handleSubmit}
                        id="create-salesperson-form">
                        <div className="form-floating mb-3">
                            <input
                                value={salesName}
                                onChange={handleSalesNameChange}
                                placeholder="Name"
                                required type="text"
                                name='salesName' id="salesName"
                                className="form-control" />
                            <label htmlFor="salesName">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                value={employeeId}
                                onChange={handleEmployeeIdChange}
                                placeholder="Employee ID#"
                                required type="text"
                                name='employeeId' id="employeeId"
                                className="form-control" />
                            <label htmlFor="employeeId">Employee ID#</label>
                        </div>
                        <button
                            className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SalesPersonForm;
