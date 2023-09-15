import './App.css'
import { useState } from 'react';
import ShirtComponent from './ShirtComponent'
import dataList from './Data'
export default function ProductsSection(teeNum, setTeeNum) {

    const [totalTeeNum, setTotalTeeNum] = useState(1);

    function handleTeeNum() {
        setTeeNum(teeNum + 1);
        setTotalTeeNum(teeNum);
        console.log(totalTeeNum);
    }

    return (
        <nav className='Products-Section'>
            <div>
                <p className='Products-BrandNewTee'>Brand New Tee</p>
            </div>
            <div className='Component-Products'>
                {
                    dataList.map((item)=> 
                    (<ShirtComponent key={item.id} item={item}/>))
                }
            </div>
        </nav>
    );
}