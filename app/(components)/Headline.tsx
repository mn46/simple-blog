interface Props {
  text: string;
}

const Headline: React.FC<Props> = ({ text }) => {
  return (
    <div className="pb-2 ml-10 border-b-2 border-b-secondary w-max">
      <h2 className="uppercase text-secondary text-sm font-bold">{text}</h2>
    </div>
  );
};

export default Headline;
