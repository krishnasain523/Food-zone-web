import { BASEURL } from "./listing"
import "./card.css"
export default function Card({ data }) {
    return (<>

       <div className="card-container">
       {
            data?.map((food) =>
            ( 
                <div key={food.title} className="card">
                    <div className="imgbox">
                        <img src={food.img} alt="" />
                    </div>
                    <div className="content-area">
                        <h3>{food.title}</h3>
                        <p>{food.content}</p>
                        <button>$ {food.price.toFixed(2)}</button>
                    </div>
                </div>

            ))


        }
       </div>
    </>)
}