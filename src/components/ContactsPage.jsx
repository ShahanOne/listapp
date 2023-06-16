import Contacts from './Contacts';

function ContactsPage(props) {
  const users = props.users;
  const loadedUsers = props.loadedUsers;

  return (
    <>
      <div className="header grid grid-cols-8 text-white  bg-indigo-600 px-4 py-12 shadow-lg">
        <p className="col-span-6 md:col-span-7 text-3xl">Contact List</p>
        <button
          onClick={props.handleLog}
          className="col-span-2 md:col-span-1 rounded shadow-lg py-2 md:px-4 text-indigo-600 bg-slate-200 hover:bg-slate-100 focus:translate-y-1"
        >
          Logout
        </button>
      </div>

      <div className="listDiv text-center py-8 px-4 md:px-40">
        {!users.length ? (
          <p className="text-2xl py-60">Loading ↻</p>
        ) : (
          loadedUsers.map((user, index) => (
            <Contacts
              key={index}
              imgSrc={user.picture.medium}
              firstName={user.name.first}
              lastName={user.name.last}
            />
          ))
        )}
      </div>
      <div className="text-center">
        <button
          onClick={props.getMoreUsers}
          className={`text-white ${
            !users.length ? 'invisible' : ''
          } bg-indigo-600 hover:bg-indigo-500 p-4 my-4 shadow-lg rounded-md`}
        >
          Load More
        </button>
        <div className="footer text-white text-2xl bg-indigo-600 px-4 py-12 shadow-lg">
          {'</>'} 2023
        </div>
      </div>
    </>
  );
}

export default ContactsPage;
