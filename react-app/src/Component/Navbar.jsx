import DateTime from "./DateTime";

const Navbar = () => {
  return (
    <>
      <ul>
        <li>
          <span>
            <h1> </h1>
          </span>
          <a class="active" href="#">
            Home
          </a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <DateTime/>
        {/* <form action="/students/query" method="get">
            <input type="search" name="query"/>
            <button type="submit"> Submit</button>
        </form> */}
      </ul>
    </>
  );
};
export default Navbar;
