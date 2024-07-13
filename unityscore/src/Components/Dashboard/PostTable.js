import React from 'react'

export default function PostTable(props) {
  return (
    <>
       <tr>
                  <td>
                    <img
                      alt="..."
                      src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                      className="avatar avatar-sm rounded-circle me-2"
                    />
                    <a className="text-heading font-semibold" href="/">
                      Robert Fox
                    </a>
                  </td>
                  <td>Feb 15, 2021</td>
                  <td className="text-end">
                    <button
                      href="/"
                      onClick={() => props.setting(true, false)}
                      className="btn btn-sm btn-neutral mx-2"
                    >
                      View
                    </button>
                    {/* there is the edit button */}
                    <button
                      href="/"
                      className="btn btn-sm btn-neutral mx-2"
                      variant="primary"
                      onClick={props.handleShow}
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      className="btn btn-sm btn-square btn-neutral text-danger-hover"
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
    </>
  )
}
