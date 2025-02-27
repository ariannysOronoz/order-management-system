import './BoxWithNameAndValue.css';

interface BoxWithNameAndValueProps {
  name:string,
  value:string
}

export default function BoxWithNameAndValue({ name, value }:BoxWithNameAndValueProps) {
  return (
    <div className="boxWithNameAndValue">
      <div className="item-common item-label">{name}</div>
      <div className="item-common item-value">{value}</div>
    </div>
  );
}
