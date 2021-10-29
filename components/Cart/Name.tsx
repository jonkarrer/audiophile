const Name = ({ name }: { name: string }) => {
  const shorthandName = () => {
    const model = name.split("-").shift();

    if (model === "xx99") {
      if (name.split("-")[2] === "two") {
        return "xx99 MK II";
      }
      return "xx99 MK I";
    } else {
      return model;
    }
  };

  return (
    <div>
      <h5 className="text-base">{shorthandName()}</h5>
    </div>
  );
};

export default Name;
