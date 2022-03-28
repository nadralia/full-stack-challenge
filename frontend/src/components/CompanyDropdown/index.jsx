import React, { useState, useEffect } from "react";
import Multiselect from "react-widgets/lib/Multiselect";

import { listSuppliers } from "../../services/suppliers";

function CompanyDropdown({ value, onChange }) {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    const fetchSuppliers = async () => {
      const data = await listSuppliers();
      setSuppliers(data.data);
    };

    fetchSuppliers();
  }, []);

  return (
    <div className="SupplierDropdown">
      <Multiselect
        value={value}
        data={suppliers}
        textField="name"
        valueField="id"
        onChange={onChange}
        allowCreate={false}
      />
    </div>
  );
}

export default CompanyDropdown;
