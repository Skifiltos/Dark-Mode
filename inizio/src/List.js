import React from "react";

const List = (props) => {
  console.log(props);
  return (
      <ul className="user-list">
        {
            props.data.map((person) =>(
              <li key={person.id}>
                <Person {...person}/>

              </li>
            )
          )
        }
      </ul>
  );
}

const Person = ({id, nome, stato, img}) => {
  return <article>
      <img src={img} alt="prs" className="person-img" />
      <div className="person-info">
        <div className="person-action">
          <h4>{nome}</h4>
          <button className="btn">
            Remove
          </button>
        </div>
        <p>{stato}</p>
      </div>
    </article>;
};

export default List;
