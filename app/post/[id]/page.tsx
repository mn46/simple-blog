const page = ({ id }) => {
  return (
    <article id={`post${id}`} className="flex flex-col gap-4 mt-10">
      <div>
        <h3 className="text-2xl font-bold">Post title</h3>
        <h4 className="text-sm text-secondary">27/10/2024</h4>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </article>
  );
};

export default page;
