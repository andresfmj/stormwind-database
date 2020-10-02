import React, { Component, useState, useEffect } from 'react'

import Input from '../components/UI/Input'
import Results from '../components/Results'
import Button from '../components/UI/Button'

import http from '../helpers/http'

function Search(props) {
    const [query, setQuery] = useState('')
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)


    const getMediaAssets = async (id) => {
        let media = await http.instance.request(`/media/item/${id}?namespace=static-us&locale=en_US`, 'GET')
        if (media) {
            return media.assets[0]
        } else {
            return null
        }
    }


    const clickedHandler = async () => {
        if (query != '' && query.length > 2) {
            let updatedItems = []
            setLoading(true)
            try {
                let data = await http.instance.request(`/search/item?namespace=static-us&locale=en_US&name.en_US=${query}&orderby=id&_page=1`, 'GET')
                
                if (data.results.length > 0) {
                    for (let i = 0; i < data.results.length; i++) {
                        let dataItem = data.results[i].data
                        
                        let media = await getMediaAssets(dataItem.id)

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
                            icon: media ? media.value : null
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
            <h2>Busca un objeto que desees in-game!</h2>
            <Input inputType='text' placeholder='Haz tu busqueda...' changed={changedTextHandler} />
            <Button clicked={clickedHandler} loading={loading}>Buscar</Button>
            <Results items={items} loading={loading} />
        </div>
    )
}

export default Search
