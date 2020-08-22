import React, { Component, useState, useEffect } from 'react'

import Input from '../components/UI/Input'
import Results from '../components/Results'

import { axios } from '../helpers/util'

function Search(props) {
    const [query, setQuery] = useState('')
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)


    const clickedHandler = async () => {
        if (query != '' && query.length > 2) {
            let updatedItems = []
            setLoading(true)
            try {
                const response = await axios.get(`/search/item?namespace=static-us&locale=en_US&name.en_US=${query}&orderby=id&_page=1`)
                const data = response.data
                console.log(data)
                if (data.results.length > 0) {
                    for (let i = 0; i < data.results.length; i++) {
                        let dataItem = data.results[i].data
                        
                        let media = await axios.get(`https://us.api.blizzard.com/data/wow/media/item/${dataItem.id}?namespace=static-us&locale=en_US`)
                        let data_media = null
                        if (media.status === 200)
                            data_media = media.data

                        let item = {
                            id: dataItem.id,
                            inventory_type: dataItem.inventory_type.name['es_ES'],
                            is_equippable: dataItem.is_equippable,
                            is_stackable: dataItem.is_stackable,
                            item_class: dataItem.item_class.name['es_ES'],
                            item_subclass: dataItem.item_subclass.name['es_ES'],
                            level: dataItem.level,
                            max_count: dataItem.max_count,
                            name: dataItem.name['es_ES'],
                            purchase_price: dataItem.purchase_price,
                            purchase_quantity: dataItem.purchase_quantity,
                            quality: dataItem.quality.name['es_ES'],
                            required_level: dataItem.required_level,
                            sell_price: dataItem.sell_price,
                            icon: data_media ? data_media.assets[0].value : null
                        }
                        updatedItems.push(item)
                    }
                    setLoading(false)
                    setItems(updatedItems)
                }
            } catch (err) {
                console.log(err)
                setLoading(false)
            }
        }
    }

    const changedTextHandler = e => {
        setQuery(e.target.value)
    }

    return (
        <div className="content-box">
            <h2>Search an Item you wish in-game</h2>
            <Input inputType='text' placeholder='Find an Item...' changed={changedTextHandler} />
            <button className='button btn-primary' onClick={clickedHandler} disabled={loading}>Find</button>
            <Results items={items} loading={loading} />
        </div>
    )
}

export default Search
