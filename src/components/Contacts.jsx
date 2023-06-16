function Contacts(props) {
  return (
    <div className="shadow-sm grid grid-cols-3  py-4">
      <img className="rounded-full" src={props.imgSrc} alt="" />
      <p className="text-lg col-span-2 py-2">
        {props.firstName} {props.lastName}
      </p>
    </div>
  );
}

export default Contacts;
