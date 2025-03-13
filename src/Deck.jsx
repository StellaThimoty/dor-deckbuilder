import Card from "./Card"

function Deck({personagem}) {
  return (
    <>
          <div className="outer_Builder" style={{flex: 1, flexDirection: 'row'}} >
            <div style={{flexDirection: 'column'}}>
            {[...Array(5)].map((_,i) =>
                <Card key={i+1} pos={i+1}/>
              )}
            {[...Array(5)].map((_,i) =>
                <Card key={i+6} pos={i+6}/>
              )}
            </div>
            <div style={{flexDirection: 'column'}}>
            {[...Array(5)].map((_,i) =>
                <Card key={i+11} pos={i+11}/>
              )}
            {[...Array(5)].map((_,i) =>
                <Card key={i+16} pos={i+16}/>
              )}
            </div>
          </div>
    </>
  )
}

export default Deck
