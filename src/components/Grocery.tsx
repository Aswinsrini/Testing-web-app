import { FormEvent, useState } from "react";
import z from "zod";
const schema = z.object({
  description: z.string(),
  amount: z.number(),
  category: z.string(),
});
interface Props {
  onData: (k: {
    description: string;
    amount: number;
    category: string;
  }) => void;
}
const initialFormData = schema.parse({
  description: "",
  amount: 0,
  category: "",
});
const Grocery = ({ onData }: Props) => {
  const [formdata, setFormdata] = useState(initialFormData);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const data = schema.parse(formdata);
    onData(data);
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="">Description</label>
        <input
          type="text"
          required
          onChange={(e) =>
            setFormdata({ ...formdata, description: e.target.value })
          }
        />
        <label htmlFor="">Amount</label>
        <input
          type="number"
          required
          onChange={(e) =>
            setFormdata({ ...formdata, amount: parseInt(e.target.value) })
          }
        />
        <label htmlFor="">category</label>
        <select
          name="category"
          required
          id=""
          onChange={(e) =>
            setFormdata({ ...formdata, category: e.target.value })
          }
        >
          <option value="1">pro</option>
          <option value="2">gro</option>
          <option value="3">shop</option>
          <option value="4">all</option>
        </select>
        <button>Add</button>
      </form>
    </>
  );
};

export default Grocery;
