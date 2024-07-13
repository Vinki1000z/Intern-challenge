import React from 'react'
import Modal from "react-bootstrap/Modal";
export default function SearchModal(props) {
  return (

    // const [searchInput, setSearchInput] = useState('');
    // const [searchResults, setSearchResults] = useState([]);
  
    // // Sample data to simulate search results
    // const users = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank'];
  
    // useEffect(() => {
    //   if (searchInput) {
    //     const results = users.filter(user =>
    //       user.toLowerCase().includes(searchInput.toLowerCase())
    //     );
    //     setSearchResults(results);
    //   } else {
    //     setSearchResults([]);
    //   }
    // }, [searchInput]);
  
    // const handleInputChange = (event) => {
    //   setSearchInput(event.target.value);
    // };
  

    <>
          <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Search Users</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              <form className="form-inline">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{borderRadius:"20px"}}
                />
              </form>
            </Modal.Body>
            {/* i will append all the similar users here */}
          </Modal>
    </>
  )
}
