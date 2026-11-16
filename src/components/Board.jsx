import Square from "./Square"
export default function Board(props) {

    return <div>
        {
            props.values.map((rowValues, rowIndex) => {
                let row = rowValues.map((value, columIndex) => {
                    return <Square
                        rowIndex={rowIndex}
                        columIndex={columIndex}
                        boardClick={props.appClick}
                        key={rowIndex + "-" + columIndex}
                        value={value}
                    />
                })
                return <div key={"row" + rowIndex}>{row}</div>
            })
        }
    </div>
}