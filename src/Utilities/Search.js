import { Form, useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate("/");

  const handleUserInput = (event) => {
    event.preventDefault();
    const input = event.target.text.value;
    console.log(input);
    navigate(`/${input}`);
  };

  return (
    <div>
      <Form onSubmit={handleUserInput}>
        <input
          type="text"
          id="search"
          name="text"
          className="form-control"
          placeholder="Search country"
          onChange={(e) => e.target.value}
        ></input>
      </Form>
    </div>
  );
};

export default Search;
