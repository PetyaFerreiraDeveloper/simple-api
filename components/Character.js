export default function Character({ character, ind }) {
  const { name, gender } = character;
  return (
    <li key={ind} className="flex gap-2">
      <a className="text-blue-500" href="">{name}</a>
      <p>{gender}</p>
    </li>
  );
}
