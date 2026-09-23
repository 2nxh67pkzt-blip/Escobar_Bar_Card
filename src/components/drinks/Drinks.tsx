import "./drinks.scss";

interface DrinksCardType {
  available?: boolean;
  name: string;
  imgUrl: string;
  price: number;
  description?: string;
  rating?: number;
}

export function Drinks(props: DrinksCardType) {
  return (
    <div className="drinks">

      <img className="drinks__img" src={props.imgUrl} alt={props.description} />
      
      <p className="drinks__rating">⭐️{props.rating}</p>
      
      <div className="drinks__avalable">
        {props.available ? "Ask to bar" : "Ask to bar"}
      </div>
      
      <div className="drinks__wrap">
        <p>{props.name}</p>
        <p>💳{props.price}</p>
      </div>
        
        <p className="drinks__description">{props.description}</p>
    
    </div>

  );
}
