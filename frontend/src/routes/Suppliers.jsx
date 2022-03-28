import { useEffect, useState } from "react";
import { apiRoot } from "../config";

const endpoint = `${apiRoot}/suppliers`;

const Suppliers = () => {
  const [err, hasError] = useState(false);
  const [suppliers, setSuppliers] = useState([]);

  const loadSuppliers = async () => {
    let response = await fetch(endpoint);
    let { data } = await response.json();

    setSuppliers(data);
  };

  useEffect(() => {
    loadSuppliers();
  }, []);

  return (
    <main>
      <h2>Coffee suppliers</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map(({ id, name }) => (
            <tr key={id}>
              <td>{id}</td>
              <td style={{ fontWeight: "bold" }}>{name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Suppliers;
