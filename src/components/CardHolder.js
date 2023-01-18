import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'
import Cards from './Cards';
import Loading from './Uicomponent/Loader';
import Button from './Uicomponent/Button'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
//imported from react-icons
import { AiFillPieChart } from 'react-icons/ai'
//modal for viewing 
import Modal from './Uicomponent/Modal';
import ChartShow from './ChartShow';
function CardHolder() {
    ChartJS.register(ArcElement, Tooltip, Legend);
    const [loader, setLoader] = useState(false);


    useEffect(() => {
        // {enabling loader on the component mount}
        setLoader(true);
        // calling api to get products using axios
        axios.get('https://fakestoreapi.com/products').then((res) => {
            //setted the data into the temporary state
            setProduct(res.data);
        })
        axios.get('https://fakestoreapi.com/products/categories').then((res) => {
            //setted the data into the temporary state
            setCategory(res.data);
            //disabled the loader
            setLoader(false);
        })
    }, [])


    //Hooks for storing data temporarily
    const [product, setProduct] = useState();
    const [category, setCategory] = useState();
    const [selectedCategory, setSelectedCategory] = useState();
    const [chartshow, setChartshow] = useState(false);
    //function to handle the selection of category
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    }
    // Function to get filtered list
    function getFilteredList() {
        // Avoid filter when selectedCategory is null
        if (!selectedCategory) {
            return product;
        }
        return product.filter((item) => item.category === selectedCategory);
    }
    //function for getting array of objects with the given manfashion category
    function getManfashionList() {
        return product.filter((item) => item.category === category[2]);
    }
    //function for getting array of objects with the given womenfashion category
    function getwomenfashionList() {
        return product.filter((item) => item.category === category[3]);
    }
    //function for getting array of objects with the given jewellery category
    function getjewellaryList() {
        return product.filter((item) => item.category === category[1]);
    }
    //function for getting array of objects with the given electronics category
    function getelcectronicList() {
        return product.filter((item) => item.category === category[0]);
    }

    //function for handling chart button
    const handlechart = () => {
        setChartshow(true);
    }

    // Avoid duplicate function calls with useMemo
    var filteredList = useMemo(getFilteredList, [selectedCategory, product]);
    return (
        <div>
            {
                loader && (<Loading />)
            }
            {
                chartshow && (
                    <Modal>

                        <ChartShow setChartshow={setChartshow} getManfashionList={getManfashionList} getwomenfashionList={getwomenfashionList}
                            getjewellaryList={getjewellaryList} getelcectronicList={getelcectronicList}

                        />

                    </Modal>

                )
            }
            <div className='bg-white text-black flex p-2 md:mr-5 items-center justify-between'>
                {/* <div className='flex items-center'>
                <input placeholder='name' className='bg-gray-500 text-white p-2 rounded-lg ' />
                <AiOutlineSearch size={30} className='ml-1' />
                </div> */}
                <div className='flex space-x-6'>
                    <select name='category-list' id='category-list'
                        onChange={handleCategoryChange}
                    >
                        <option value="">Select Category</option>
                        {category?.map((category, index) => {
                            return (
                                <option key={index} value={category}>
                                    {category}
                                </option>
                            );
                        })}
                    </select>
                </div>

            </div>
            <div className='mt-3 grid  grid-cols-2  gap-4 md:grid-cols-4 md:gap-10 mb-10'>
                {
                    filteredList?.map((data, id) => (
                        <Cards key={id} image={data.image} title={data.title} price={data.price}
                            category={data.category} rating={data.rating.rate} count={data.rating.count}
                            description={data.description}
                        />
                    ))
                }
            </div>
            <div className=' bottom-3  z-50 sticky'>
                <Button active
                    buttonText='ANALYSE' icon={AiFillPieChart}
                    clickHandler={handlechart}
                    disabled={
                        !category
                    }
                />
            </div>
        </div>
    )
}

export default CardHolder
