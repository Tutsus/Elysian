import './App.css'
import ShirtComponent from './ShirtComponent'

export default function ProductsSection() {
    return (
        <nav className='Products-Section'>
            <div>
                <p className='Products-BrandNewTee'>Brand New Tee</p>
            </div>
            <div className='Component-Products'>
                <ShirtComponent/>
            </div>
            <button className="Products-Button" type="button">Tee Zone is here!!</button>
        </nav>
    );
}