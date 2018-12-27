import SingleItem from '../components/SingleIttem';


const Item = props => {
  return (
    <div>
      <SingleItem id={props.query.id} />
    </div>
  );
};

export default Item;