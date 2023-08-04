export default function EvolutionChart({ evo: { start } }){
    // needs a starting point
    return (
        <div>
            {/* FIRST FORM
                Note: This list has to exsist if the pokemon can evolve.
                A pokemon that cannot evolve would not have an evolution object, plain and simple.
                other option beside start would be, altForm, and altForm2 until other wise known of more.
            */}
                {/* START >*/}
            <div>
                {/* Pokemon Image*/}
                <div>{start.id}</div>
                <div>{start.name}</div>
                <div>{start.type.one}</div>
                <div>{start.type?.two}</div>
            </div>
            <div>
                {/* HOW */}
                <h3>{start.how}</h3>
            </div>
            {start.next ? (
                <div>
                    {/* NEXT */}
                    {/* Pokemon Image*/}
                    <div>{start.next.id}</div>
                    <div>{start.next.name}</div>
                    <div>{start.next.type.one}</div>
                    <div>{start.next.type?.two}</div>
                </div>
            ) : (
                <></>
            )}
            {/* IF ANOTHER NEXT EXSISTS ELSE CHECK FOR MULTIPLE eg:pikachu*/}
            {start.next.next ? (
                <div>
                    {/* NEXT */}
                    {/* Pokemon Image*/}
                    <div>{start.next.next.id}</div>
                    <div>{start.next.next.name}</div>
                    <div>{start.next.next.type.one}</div>
                    <div>{start.next.next.type?.two}</div>
                </div>
            ) : start.next.multiple ? (
                <>
                </>
            ) : null}


            {/* ALT FORM IF EXSISTS */}
            {evo?.altForm &&
                <>
                    <div>
                        {/* Pokemon Image*/}
                        <h2>{altForm.form} 'insert pokemon name here'</h2>
                        <div>{altForm.id}</div>
                        {/* Pokemon typing */}
                    </div>
                    <div>
                        {/* How to */}
                        <h3>{altForm.how}</h3>
                    </div>
                    <div>
                        {/* Pokemon Image*/}
                        <h2>{altForm.next.form} 'insert pokemon name here'</h2>
                        <div>{altForm.next.id}</div>
                        {/* Pokemon typing */}
                    </div>
                    {altForm?.next?.next && 
                        <>
                            <div>
                                {/* How to */}
                                <h3>{altForm.next.how}</h3>
                            </div>
                            <div>
                                {/* Pokemon Image*/}
                                <h2>{altForm.next.next.form} 'insert pokemon name here'</h2>
                                <div>{altForm.next.next.id}</div>
                                {/* Pokemon typing */}
                            </div>
                        </>}
                </>
            }
        </div>
    )
}