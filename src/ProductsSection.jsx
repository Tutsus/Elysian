import './App.css'
import ShirtComponent from './ShirtComponent'
import dataList from './Data'

export default function ProductsSection() {

    return (
        <nav className='Products-Section'>
            <div>
                <p className='Products-BrandNewTee'>Brand New Tee</p>
            </div>
            <div className='Component-Products'>
                {
                    dataList.map((item)=> 
                    (<ShirtComponent 
                        key={item.id} 
                        item={item}
                    />))
                }
            </div>
        </nav>
    );
}