import { useEffect, useState } from "react";
import TableComponent from "./TableComponent";
import TopBar from "./TopBar";
const Downloader = () => {
    const [data, setData] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectionText, setSelectionText] = useState('None Selected');
    
    useEffect(() => {
        fetch('/data.json')
        .then(response => response.json())
        .then(data => setData(data));
    }, [])

    const setSelections = (selections) => {
        if(selections.length === 0) {
            setSelectionText("None Selected")
        } else {
            setSelectionText("Selected " + selections.length)
        }
        const filteredItems = data.filter(items => selections.indexOf(items.name) !== -1);
        setSelectedItems(filteredItems);
    }
    
    return (
        <>
            <TopBar selectionText={selectionText} selectedItems={selectedItems}/>
            <TableComponent data={data} setSelections={setSelections}/>
        </>
    )
}

export default Downloader;