import { useEffect, useState } from "react"
import "./listing.css"
import Card from "./card";
export const BASEURL = "http://localhost:3000"
export default function Listing() {

    let [data, setdata] = useState(null);
    let [filterdata, setfilterdata] = useState(null);
    let [err, seterr] = useState("");
    let [loading, setloading] = useState(false);


    useEffect(() => {
        const fatchingdata = async () => {
            setloading(true);
            try {
                const response = await fetch(BASEURL);
                const json = await response.json();
                setdata(json);
                setfilterdata(json)
                setloading(false);
            } catch (err) {
                seterr("unable to fatch data");
            }
        }
        fatchingdata();
    }, [])
    if (err) {
        return <div> {err}</div>
    }
    if (loading) {
        return <div>loading... </div>
    }
    const searchfood = (event) => {
        const searchvalue = event.target.value;
        if (searchvalue === "") {
            setfilterdata(data);
        }
        const filterdata = data?.filter((food) => food.title.toLowerCase().includes(searchvalue.toLowerCase()))
        setfilterdata(filterdata);
    }
    const filtertype=(type)=>
    {if(type==="all")
    {
        setfilterdata(data);
        return;
    }
    const filterdata = data?.filter((food) => food.type.toLowerCase().includes(type.toLowerCase()))
    setfilterdata(filterdata);

    }
    return (<>
        <nav>

            <div className="search">
                <div><img src="./images/FoodyZone.svg" alt="logo" /></div>
                <div ><input onChange={searchfood} type="text" placeholder="search ..." /></div>
            </div>
            <div className="options">
                <button onClick={()=>filtertype('all')}>All</button>
                <button onClick={()=>filtertype('breakfast')}>Breakfast</button>
                <button onClick={()=>filtertype('lunch')}>Lunch</button>
                <button onClick={()=>filtertype('dinner')}>Dinner</button>
            </div>
        </nav>

        <div className="background">
            <Card data={filterdata} />
        </div>
    </>)
}