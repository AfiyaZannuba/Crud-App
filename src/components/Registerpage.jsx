import { useState } from "react";
function Register(){
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
      });
    
      const [click, setClick] = useState([]);
      const [updatebtn, setupdatebtn] = useState(false);
      const [editIndex, setEditindex] = useState("");
    
      const handleChange = (e) => {
        setInputs({
          ...inputs,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (updatebtn) {
          const temptabledata = click;
          Object.assign(temptabledata[editIndex], inputs)
          setClick([...temptabledata])
        } else {
          setClick([...click, inputs]);
          setInputs({
            name: "",
            email: "",
          });
        }
      };
    
      const handleDelete = (index) => {
        const filterdata = click.filter((item, i) => i !== index);
        setClick(filterdata);
      };
    
      const handleEdit = (index) => {
        const tempdata = click[index];
        setInputs({
          name: tempdata.name,
          email: tempdata.email,
        });
        setupdatebtn(true);
        setEditindex(index);
      };
return(
    <div className="min-h-screen bg-[#004b43]">
      <h1 className="text-center"> Crud App</h1>
      <div className="bg-[#e5e4e4] max-w-fit m-auto p-10">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label>Name</label>
            <input name="name" value={inputs.name} onChange={handleChange} />
          </div>
          <div className="flex flex-col">
            <label>Email</label>
            <input name="email" value={inputs.email} onChange={handleChange} />
          </div>
          <button type="submit" className="w-full bg-[#014d64] text-white mt-3">
            {updatebtn ? "Update" : "Add"}
          </button>
        </form>
      </div>

      <div>
        <table className="w-full mt-10 text-center">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {click.map((item, i) => (
              <tr key={item.index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <button
                    onClick={() => handleEdit(i)}
                    className="mr-3 text-yellow-300"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(i)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
)
}

export default Register;