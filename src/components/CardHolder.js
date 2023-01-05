import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import Cards from './Cards';
import Loading from './Uicomponent/Loader';
import { useDispatch } from 'react-redux';
import { setUsers } from '../slices/userSlices';
function CardHolder() {
    const [cards, setCards] = useState([]);
    const dispatch=useDispatch();
    const [loader,setLoader]=useState(false);
    useEffect(() => {
        setLoader(true);
        axios
            .get("https://reqres.in/api/users?page=2")
            .then((res) => {
                setCards(res.data.data);
                //Dispatched data to redux store
                dispatch(setUsers(res.data.data));
                setLoader(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            {
                loader && (<Loading/>)
            }
            <div className='bg-white text-black flex p-2 mr-5 items-center'>
                <input placeholder='name' className='bg-gray-500 text-white p-2 rounded-lg ' />
                <AiOutlineSearch size={30} className='ml-1' />
            </div>
            <div className='mt-3 grid  grid-cols-2  gap-4 md:grid-cols-4 md:gap-10 '>
                {
                    cards.map((data) => (
                        <Cards key={data.id} avatar={data.avatar} first_name={data.first_name} id={data.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default CardHolder
