import Home from "."
export default function Popular(item) {
    return (
      <>
        <li>
          {item.title} - {item.release_date}
          <img src={item.poster_path} alt={item.title} />
          <p>{item.overview}</p>
          </li>
      </>
    );
  }
  