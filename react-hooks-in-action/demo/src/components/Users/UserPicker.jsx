import { users } from "../../static.json";

export default function UserPicker() {
  return (
    <select>
      {users.map((u) => (
        <option key={u.id} value={u.id}>
          {u.name}
        </option>
      ))}
    </select>
  );
}
