import React, { useState } from 'react';
import './styles.css';

const AwesomeComponent = () => {
    
    const [name, setName] = useState([
    {
        id: 1,
        brand: 'Toyota',
        model: 'Wigo',
        bodystyle: 'Hatchback',
        variant: 'TRD',
        price: '700000',
        brandspan: 6,
        modelspan: 2,
        bodystylespan: 2
    },
    {
        id: 2,
        brand: '',
        model: '',
        bodystyle: '',
        variant: 'G',
        price: '658000'
    },
    {
        id: 3,
        brand: '',
        model: 'Yaris',
        bodystyle: 'Hatchback',
        variant: 'S',
        price: '1114000',
        modelspan: 2,
        bodystylespan: 2
    },
    {
        id: 4,
        brand: '',
        model: '',
        bodystyle: '',
        variant: 'E',
        price: '973000',
    },
    {
        id: 5,
        brand: '',
        model: 'Vios',
        bodystyle: 'Sedan',
        variant: 'G',
        price: '1114000',
        modelspan: 2,
        bodystylespan: 2
    },
    {
        id: 6,
        brand: '',
        model: '',
        bodystyle: '',
        variant: 'XLF',
        price: '973000',
    },
    {
        id: 7,
        brand: 'Honda',
        model: 'Yaris',
        bodystyle: 'Hatchback',
        variant: 'E',
        price: '973000'
    }
    ]);
    
    const firstObject = name[0];
    const objKeys = Object.keys(firstObject);
    const specObject = {};
    objKeys.forEach(key => {
        specObject[key] = name.map(item => item[key]);
    });
    const tempArray = [];
    let brandInitialIndex = -1;
    specObject.brand.forEach((item, index) => {
        if (index > 0) {
            if (brandInitialIndex === -1) {
                brandInitialIndex = index - 1;
            }
            if (specObject.brand[brandInitialIndex] === specObject.brand[index]) {
                specObject.brand[index] = '';
                // tempArray[index].brandspan += 1;
            } else {
                brandInitialIndex = index;
            }
        }
        tempArray.push(
            {
                brand: specObject.brand[index],
                model: specObject.model[index],
                bodystyle: specObject.bodystyle[index],
                variant: specObject.variant[index],
                price: specObject.price[index],
                brandspan: 1,
            }
        );
    });

    const numberFormat = (val) => val.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    console.log(specObject);
    return (
        <div>
            <table>
                <tr>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Body Style</th>
                    <th>Variant</th>
                    <th>Price</th>
                </tr>
                {
                    name.map(item => (
                        <tr key={item.id}>
                            {item.brand.length > 0 && <td class="brand_item" rowSpan={item.brandspan}>{item.brand}</td>}
                            {item.model.length > 0 && <td rowSpan={item.modelspan}>{item.model}</td>}
                            {item.bodystyle.length > 0 && <td rowSpan={item.bodystylespan}>{item.bodystyle}</td>}
                            <td>{item.variant}</td>
                            <td>{numberFormat(item.price)}</td>
                    </tr>
                    ))
                }
            </table>
        </div>
    );
    
}

export default AwesomeComponent;