import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons'
const TopBar = ({selectionText, selectedItems}) => {
    const onHandleClick = () => {
        if(selectedItems.length > 0) {
            alert(JSON.stringify(selectedItems))
        }
    }

    return (
        <>
            <div className="topBar">
            <div className="selectionArea">{selectionText}</div>
            { selectedItems && selectedItems.length > 0 &&
                <div className="downloadButton" onClick={() => {
                    onHandleClick()
                }}>
                    <FontAwesomeIcon icon={faDownload} style={{marginRight: "5px"}}/>Download Selected
                </div>
            }
            </div>
        </>
    )
}
export default TopBar;