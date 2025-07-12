import SearchableList from "./components/SearchableList";

const data = [
  { name: 'Alice', email: 'alice@example.com' },
  { name: 'Bob', email: 'bob@example.com' },
];

const headers = ['Name', 'Email'];

function renderRow(item, index) {
  return (
    <tr key={index}>
      <td>{item.name}</td>
      <td>{item.email}</td>
    </tr>
  );
}

function App() {
  return (
    <div className="container mt-4">
      <SearchableList
        data={data}
        headers={headers}
        searchableFields={['name', 'email']}
        renderRow={renderRow}
      />
    </div>
  );
}

export default App;
